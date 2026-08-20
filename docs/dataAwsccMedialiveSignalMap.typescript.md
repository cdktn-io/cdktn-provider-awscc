# `dataAwsccMedialiveSignalMap` Submodule <a name="`dataAwsccMedialiveSignalMap` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveSignalMap <a name="DataAwsccMedialiveSignalMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/medialive_signal_map awscc_medialive_signal_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap(scope: Construct, id: string, config: DataAwsccMedialiveSignalMapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig">DataAwsccMedialiveSignalMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig">DataAwsccMedialiveSignalMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveSignalMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveSignalMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/medialive_signal_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveSignalMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers">cloudwatchAlarmTemplateGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds">cloudwatchAlarmTemplateGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.discoveryEntryPointArn">discoveryEntryPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers">eventBridgeRuleTemplateGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds">eventBridgeRuleTemplateGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.failedMediaResourceMap">failedMediaResourceMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap">DataAwsccMedialiveSignalMapFailedMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forceRediscovery">forceRediscovery</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastDiscoveredAt">lastDiscoveredAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastSuccessfulMonitorDeployment">lastSuccessfulMonitorDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.mediaResourceMap">mediaResourceMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap">DataAwsccMedialiveSignalMapMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorChangesPendingDeployment">monitorChangesPendingDeployment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorDeployment">monitorDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.signalMapId">signalMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchAlarmTemplateGroupIdentifiers`<sup>Required</sup> <a name="cloudwatchAlarmTemplateGroupIdentifiers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers"></a>

```typescript
public readonly cloudwatchAlarmTemplateGroupIdentifiers: string[];
```

- *Type:* string[]

---

##### `cloudwatchAlarmTemplateGroupIds`<sup>Required</sup> <a name="cloudwatchAlarmTemplateGroupIds" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds"></a>

```typescript
public readonly cloudwatchAlarmTemplateGroupIds: string[];
```

- *Type:* string[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discoveryEntryPointArn`<sup>Required</sup> <a name="discoveryEntryPointArn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.discoveryEntryPointArn"></a>

```typescript
public readonly discoveryEntryPointArn: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `eventBridgeRuleTemplateGroupIdentifiers`<sup>Required</sup> <a name="eventBridgeRuleTemplateGroupIdentifiers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers"></a>

```typescript
public readonly eventBridgeRuleTemplateGroupIdentifiers: string[];
```

- *Type:* string[]

---

##### `eventBridgeRuleTemplateGroupIds`<sup>Required</sup> <a name="eventBridgeRuleTemplateGroupIds" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds"></a>

```typescript
public readonly eventBridgeRuleTemplateGroupIds: string[];
```

- *Type:* string[]

---

##### `failedMediaResourceMap`<sup>Required</sup> <a name="failedMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.failedMediaResourceMap"></a>

```typescript
public readonly failedMediaResourceMap: DataAwsccMedialiveSignalMapFailedMediaResourceMapMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap">DataAwsccMedialiveSignalMapFailedMediaResourceMapMap</a>

---

##### `forceRediscovery`<sup>Required</sup> <a name="forceRediscovery" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forceRediscovery"></a>

```typescript
public readonly forceRediscovery: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `lastDiscoveredAt`<sup>Required</sup> <a name="lastDiscoveredAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastDiscoveredAt"></a>

```typescript
public readonly lastDiscoveredAt: string;
```

- *Type:* string

---

##### `lastSuccessfulMonitorDeployment`<sup>Required</sup> <a name="lastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastSuccessfulMonitorDeployment"></a>

```typescript
public readonly lastSuccessfulMonitorDeployment: DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a>

---

##### `mediaResourceMap`<sup>Required</sup> <a name="mediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.mediaResourceMap"></a>

```typescript
public readonly mediaResourceMap: DataAwsccMedialiveSignalMapMediaResourceMapMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap">DataAwsccMedialiveSignalMapMediaResourceMapMap</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `monitorChangesPendingDeployment`<sup>Required</sup> <a name="monitorChangesPendingDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorChangesPendingDeployment"></a>

```typescript
public readonly monitorChangesPendingDeployment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `monitorDeployment`<sup>Required</sup> <a name="monitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorDeployment"></a>

```typescript
public readonly monitorDeployment: DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signalMapId`<sup>Required</sup> <a name="signalMapId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.signalMapId"></a>

```typescript
public readonly signalMapId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveSignalMapConfig <a name="DataAwsccMedialiveSignalMapConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapConfig: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/medialive_signal_map#id DataAwsccMedialiveSignalMap#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveSignalMapFailedMediaResourceMap <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapFailedMediaResourceMap: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap = { ... }
```


### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations = { ... }
```


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSources <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapFailedMediaResourceMapSources: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources = { ... }
```


### DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment <a name="DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment = { ... }
```


### DataAwsccMedialiveSignalMapMediaResourceMap <a name="DataAwsccMedialiveSignalMapMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapMediaResourceMap: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap = { ... }
```


### DataAwsccMedialiveSignalMapMediaResourceMapDestinations <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapMediaResourceMapDestinations: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations = { ... }
```


### DataAwsccMedialiveSignalMapMediaResourceMapSources <a name="DataAwsccMedialiveSignalMapMediaResourceMapSources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapMediaResourceMapSources: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources = { ... }
```


### DataAwsccMedialiveSignalMapMonitorDeployment <a name="DataAwsccMedialiveSignalMapMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

const dataAwsccMedialiveSignalMapMonitorDeployment: dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations</a>

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapMap <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get"></a>

```typescript
public get(key: string): DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap">DataAwsccMedialiveSignalMapFailedMediaResourceMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources"></a>

```typescript
public readonly sources: DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveSignalMapFailedMediaResourceMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap">DataAwsccMedialiveSignalMapFailedMediaResourceMap</a>

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources">DataAwsccMedialiveSignalMapFailedMediaResourceMapSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveSignalMapFailedMediaResourceMapSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources">DataAwsccMedialiveSignalMapFailedMediaResourceMapSources</a>

---


### DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference <a name="DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri">detailsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detailsUri`<sup>Required</sup> <a name="detailsUri" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri"></a>

```typescript
public readonly detailsUri: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations">DataAwsccMedialiveSignalMapMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveSignalMapMediaResourceMapDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations">DataAwsccMedialiveSignalMapMediaResourceMapDestinations</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapMap <a name="DataAwsccMedialiveSignalMapMediaResourceMapMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get"></a>

```typescript
public get(key: string): DataAwsccMedialiveSignalMapMediaResourceMapOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapMediaResourceMapOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap">DataAwsccMedialiveSignalMapMediaResourceMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.sources"></a>

```typescript
public readonly sources: DataAwsccMedialiveSignalMapMediaResourceMapSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapMediaResourceMapSourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveSignalMapMediaResourceMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap">DataAwsccMedialiveSignalMapMediaResourceMap</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapSourcesList <a name="DataAwsccMedialiveSignalMapMediaResourceMapSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources">DataAwsccMedialiveSignalMapMediaResourceMapSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveSignalMapMediaResourceMapSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources">DataAwsccMedialiveSignalMapMediaResourceMapSources</a>

---


### DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference <a name="DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveSignalMap } from '@cdktn/provider-awscc'

new dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri">detailsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment">DataAwsccMedialiveSignalMapMonitorDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detailsUri`<sup>Required</sup> <a name="detailsUri" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri"></a>

```typescript
public readonly detailsUri: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveSignalMapMonitorDeployment;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment">DataAwsccMedialiveSignalMapMonitorDeployment</a>

---




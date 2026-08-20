# `dataAwsccIotResourceSpecificLogging` Submodule <a name="`dataAwsccIotResourceSpecificLogging` Submodule" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotResourceSpecificLogging <a name="DataAwsccIotResourceSpecificLogging" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iot_resource_specific_logging awscc_iot_resource_specific_logging}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.Initializer"></a>

```typescript
import { dataAwsccIotResourceSpecificLogging } from '@cdktn/provider-awscc'

new dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging(scope: Construct, id: string, config: DataAwsccIotResourceSpecificLoggingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig">DataAwsccIotResourceSpecificLoggingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig">DataAwsccIotResourceSpecificLoggingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotResourceSpecificLogging resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isConstruct"></a>

```typescript
import { dataAwsccIotResourceSpecificLogging } from '@cdktn/provider-awscc'

dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isTerraformElement"></a>

```typescript
import { dataAwsccIotResourceSpecificLogging } from '@cdktn/provider-awscc'

dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotResourceSpecificLogging } from '@cdktn/provider-awscc'

dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.generateConfigForImport"></a>

```typescript
import { dataAwsccIotResourceSpecificLogging } from '@cdktn/provider-awscc'

dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotResourceSpecificLogging resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotResourceSpecificLogging to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotResourceSpecificLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iot_resource_specific_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotResourceSpecificLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLogging.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotResourceSpecificLoggingConfig <a name="DataAwsccIotResourceSpecificLoggingConfig" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.Initializer"></a>

```typescript
import { dataAwsccIotResourceSpecificLogging } from '@cdktn/provider-awscc'

const dataAwsccIotResourceSpecificLoggingConfig: dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotResourceSpecificLogging.DataAwsccIotResourceSpecificLoggingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iot_resource_specific_logging#id DataAwsccIotResourceSpecificLogging#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




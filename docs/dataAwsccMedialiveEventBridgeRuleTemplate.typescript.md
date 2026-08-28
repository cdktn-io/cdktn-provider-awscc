# `dataAwsccMedialiveEventBridgeRuleTemplate` Submodule <a name="`dataAwsccMedialiveEventBridgeRuleTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveEventBridgeRuleTemplate <a name="DataAwsccMedialiveEventBridgeRuleTemplate" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_event_bridge_rule_template awscc_medialive_event_bridge_rule_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

new dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate(scope: Construct, id: string, config: DataAwsccMedialiveEventBridgeRuleTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig">DataAwsccMedialiveEventBridgeRuleTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig">DataAwsccMedialiveEventBridgeRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isConstruct"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMedialiveEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveEventBridgeRuleTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveEventBridgeRuleTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_event_bridge_rule_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveEventBridgeRuleTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventBridgeRuleTemplateId">eventBridgeRuleTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventTargets">eventTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList">DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventBridgeRuleTemplateId`<sup>Required</sup> <a name="eventBridgeRuleTemplateId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventBridgeRuleTemplateId"></a>

```typescript
public readonly eventBridgeRuleTemplateId: string;
```

- *Type:* string

---

##### `eventTargets`<sup>Required</sup> <a name="eventTargets" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventTargets"></a>

```typescript
public readonly eventTargets: DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList">DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList</a>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveEventBridgeRuleTemplateConfig <a name="DataAwsccMedialiveEventBridgeRuleTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

const dataAwsccMedialiveEventBridgeRuleTemplateConfig: dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_event_bridge_rule_template#id DataAwsccMedialiveEventBridgeRuleTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveEventBridgeRuleTemplateEventTargets <a name="DataAwsccMedialiveEventBridgeRuleTemplateEventTargets" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets.Initializer"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

const dataAwsccMedialiveEventBridgeRuleTemplateEventTargets: dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList <a name="DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

new dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference <a name="DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveEventBridgeRuleTemplate } from '@cdktn/provider-awscc'

new dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets">DataAwsccMedialiveEventBridgeRuleTemplateEventTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveEventBridgeRuleTemplateEventTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets">DataAwsccMedialiveEventBridgeRuleTemplateEventTargets</a>

---




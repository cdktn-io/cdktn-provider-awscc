# `dataAwsccScnDataIntegrationFlow` Submodule <a name="`dataAwsccScnDataIntegrationFlow` Submodule" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccScnDataIntegrationFlow <a name="DataAwsccScnDataIntegrationFlow" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow awscc_scn_data_integration_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow(scope: Construct, id: string, config: DataAwsccScnDataIntegrationFlowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig">DataAwsccScnDataIntegrationFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig">DataAwsccScnDataIntegrationFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isConstruct"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformElement"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformDataSource"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccScnDataIntegrationFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccScnDataIntegrationFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccScnDataIntegrationFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList">DataAwsccScnDataIntegrationFlowSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList">DataAwsccScnDataIntegrationFlowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference">DataAwsccScnDataIntegrationFlowTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference">DataAwsccScnDataIntegrationFlowTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.sources"></a>

```typescript
public readonly sources: DataAwsccScnDataIntegrationFlowSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList">DataAwsccScnDataIntegrationFlowSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.tags"></a>

```typescript
public readonly tags: DataAwsccScnDataIntegrationFlowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList">DataAwsccScnDataIntegrationFlowTagsList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.target"></a>

```typescript
public readonly target: DataAwsccScnDataIntegrationFlowTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference">DataAwsccScnDataIntegrationFlowTargetOutputReference</a>

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.transformation"></a>

```typescript
public readonly transformation: DataAwsccScnDataIntegrationFlowTransformationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference">DataAwsccScnDataIntegrationFlowTransformationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccScnDataIntegrationFlowConfig <a name="DataAwsccScnDataIntegrationFlowConfig" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowConfig: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow#id DataAwsccScnDataIntegrationFlow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccScnDataIntegrationFlowSources <a name="DataAwsccScnDataIntegrationFlowSources" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowSources: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources = { ... }
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSource <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowSourcesDatasetSource: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource = { ... }
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions = { ... }
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy = { ... }
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority = { ... }
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields = { ... }
```


### DataAwsccScnDataIntegrationFlowSourcesS3Source <a name="DataAwsccScnDataIntegrationFlowSourcesS3Source" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowSourcesS3Source: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source = { ... }
```


### DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions <a name="DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowSourcesS3SourceOptions: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions = { ... }
```


### DataAwsccScnDataIntegrationFlowTags <a name="DataAwsccScnDataIntegrationFlowTags" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTags: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags = { ... }
```


### DataAwsccScnDataIntegrationFlowTarget <a name="DataAwsccScnDataIntegrationFlowTarget" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTarget: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget = { ... }
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTarget <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTarget" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTargetDatasetTarget: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget = { ... }
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions = { ... }
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy = { ... }
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority = { ... }
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields = { ... }
```


### DataAwsccScnDataIntegrationFlowTransformation <a name="DataAwsccScnDataIntegrationFlowTransformation" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTransformation: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation = { ... }
```


### DataAwsccScnDataIntegrationFlowTransformationSqlTransformation <a name="DataAwsccScnDataIntegrationFlowTransformationSqlTransformation" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

const dataAwsccScnDataIntegrationFlowTransformationSqlTransformation: dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get"></a>

```typescript
public get(index: number): DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fields"></a>

```typescript
public readonly fields: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriority">fieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPriority`<sup>Required</sup> <a name="fieldPriority" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriority"></a>

```typescript
public readonly fieldPriority: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecords">dedupeRecords</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategy">dedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadType">loadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedupeRecords`<sup>Required</sup> <a name="dedupeRecords" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecords"></a>

```typescript
public readonly dedupeRecords: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dedupeStrategy`<sup>Required</sup> <a name="dedupeStrategy" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategy"></a>

```typescript
public readonly dedupeStrategy: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference</a>

---

##### `loadType`<sup>Required</sup> <a name="loadType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadType"></a>

```typescript
public readonly loadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifier">datasetIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource">DataAwsccScnDataIntegrationFlowSourcesDatasetSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdentifier`<sup>Required</sup> <a name="datasetIdentifier" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifier"></a>

```typescript
public readonly datasetIdentifier: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.options"></a>

```typescript
public readonly options: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowSourcesDatasetSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource">DataAwsccScnDataIntegrationFlowSourcesDatasetSource</a>

---


### DataAwsccScnDataIntegrationFlowSourcesList <a name="DataAwsccScnDataIntegrationFlowSourcesList" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccScnDataIntegrationFlowSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccScnDataIntegrationFlowSourcesOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.s3Source">s3Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference">DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources">DataAwsccScnDataIntegrationFlowSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetSource`<sup>Required</sup> <a name="datasetSource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.datasetSource"></a>

```typescript
public readonly datasetSource: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference</a>

---

##### `s3Source`<sup>Required</sup> <a name="s3Source" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.s3Source"></a>

```typescript
public readonly s3Source: DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference">DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference</a>

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources">DataAwsccScnDataIntegrationFlowSources</a>

---


### DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions">DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions">DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions</a>

---


### DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference">DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source">DataAwsccScnDataIntegrationFlowSourcesS3Source</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.options"></a>

```typescript
public readonly options: DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference">DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowSourcesS3Source;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source">DataAwsccScnDataIntegrationFlowSourcesS3Source</a>

---


### DataAwsccScnDataIntegrationFlowTagsList <a name="DataAwsccScnDataIntegrationFlowTagsList" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.get"></a>

```typescript
public get(index: number): DataAwsccScnDataIntegrationFlowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccScnDataIntegrationFlowTagsOutputReference <a name="DataAwsccScnDataIntegrationFlowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags">DataAwsccScnDataIntegrationFlowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags">DataAwsccScnDataIntegrationFlowTags</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get"></a>

```typescript
public get(index: number): DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fields"></a>

```typescript
public readonly fields: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriority">fieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPriority`<sup>Required</sup> <a name="fieldPriority" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriority"></a>

```typescript
public readonly fieldPriority: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecords">dedupeRecords</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategy">dedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadType">loadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedupeRecords`<sup>Required</sup> <a name="dedupeRecords" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecords"></a>

```typescript
public readonly dedupeRecords: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dedupeStrategy`<sup>Required</sup> <a name="dedupeStrategy" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategy"></a>

```typescript
public readonly dedupeStrategy: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference</a>

---

##### `loadType`<sup>Required</sup> <a name="loadType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadType"></a>

```typescript
public readonly loadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifier">datasetIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget">DataAwsccScnDataIntegrationFlowTargetDatasetTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdentifier`<sup>Required</sup> <a name="datasetIdentifier" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifier"></a>

```typescript
public readonly datasetIdentifier: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.options"></a>

```typescript
public readonly options: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTargetDatasetTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget">DataAwsccScnDataIntegrationFlowTargetDatasetTarget</a>

---


### DataAwsccScnDataIntegrationFlowTargetOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.datasetTarget">datasetTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget">DataAwsccScnDataIntegrationFlowTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetTarget`<sup>Required</sup> <a name="datasetTarget" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.datasetTarget"></a>

```typescript
public readonly datasetTarget: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference</a>

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget">DataAwsccScnDataIntegrationFlowTarget</a>

---


### DataAwsccScnDataIntegrationFlowTransformationOutputReference <a name="DataAwsccScnDataIntegrationFlowTransformationOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformation">sqlTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference">DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.transformationType">transformationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation">DataAwsccScnDataIntegrationFlowTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlTransformation`<sup>Required</sup> <a name="sqlTransformation" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformation"></a>

```typescript
public readonly sqlTransformation: DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference">DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference</a>

---

##### `transformationType`<sup>Required</sup> <a name="transformationType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.transformationType"></a>

```typescript
public readonly transformationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTransformation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation">DataAwsccScnDataIntegrationFlowTransformation</a>

---


### DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference <a name="DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer"></a>

```typescript
import { dataAwsccScnDataIntegrationFlow } from '@cdktn/provider-awscc'

new dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation">DataAwsccScnDataIntegrationFlowTransformationSqlTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccScnDataIntegrationFlowTransformationSqlTransformation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation">DataAwsccScnDataIntegrationFlowTransformationSqlTransformation</a>

---




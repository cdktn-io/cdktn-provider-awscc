# `dataAwsccOsisPipelineEndpoint` Submodule <a name="`dataAwsccOsisPipelineEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOsisPipelineEndpoint <a name="DataAwsccOsisPipelineEndpoint" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/osis_pipeline_endpoint awscc_osis_pipeline_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.Initializer"></a>

```typescript
import { dataAwsccOsisPipelineEndpoint } from '@cdktn/provider-awscc'

new dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint(scope: Construct, id: string, config: DataAwsccOsisPipelineEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig">DataAwsccOsisPipelineEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig">DataAwsccOsisPipelineEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOsisPipelineEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isConstruct"></a>

```typescript
import { dataAwsccOsisPipelineEndpoint } from '@cdktn/provider-awscc'

dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccOsisPipelineEndpoint } from '@cdktn/provider-awscc'

dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccOsisPipelineEndpoint } from '@cdktn/provider-awscc'

dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccOsisPipelineEndpoint } from '@cdktn/provider-awscc'

dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccOsisPipelineEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOsisPipelineEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOsisPipelineEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/osis_pipeline_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOsisPipelineEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.ingestEndpointUrl">ingestEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.pipelineArn">pipelineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference">DataAwsccOsisPipelineEndpointVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `ingestEndpointUrl`<sup>Required</sup> <a name="ingestEndpointUrl" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.ingestEndpointUrl"></a>

```typescript
public readonly ingestEndpointUrl: string;
```

- *Type:* string

---

##### `pipelineArn`<sup>Required</sup> <a name="pipelineArn" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.pipelineArn"></a>

```typescript
public readonly pipelineArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: DataAwsccOsisPipelineEndpointVpcOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference">DataAwsccOsisPipelineEndpointVpcOptionsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOsisPipelineEndpointConfig <a name="DataAwsccOsisPipelineEndpointConfig" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccOsisPipelineEndpoint } from '@cdktn/provider-awscc'

const dataAwsccOsisPipelineEndpointConfig: dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/osis_pipeline_endpoint#id DataAwsccOsisPipelineEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOsisPipelineEndpointVpcOptions <a name="DataAwsccOsisPipelineEndpointVpcOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptions.Initializer"></a>

```typescript
import { dataAwsccOsisPipelineEndpoint } from '@cdktn/provider-awscc'

const dataAwsccOsisPipelineEndpointVpcOptions: dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOsisPipelineEndpointVpcOptionsOutputReference <a name="DataAwsccOsisPipelineEndpointVpcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccOsisPipelineEndpoint } from '@cdktn/provider-awscc'

new dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptions">DataAwsccOsisPipelineEndpointVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOsisPipelineEndpointVpcOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipelineEndpoint.DataAwsccOsisPipelineEndpointVpcOptions">DataAwsccOsisPipelineEndpointVpcOptions</a>

---




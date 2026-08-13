# `dataAwsccNeptunegraphPrivateGraphEndpoint` Submodule <a name="`dataAwsccNeptunegraphPrivateGraphEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNeptunegraphPrivateGraphEndpoint <a name="DataAwsccNeptunegraphPrivateGraphEndpoint" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/neptunegraph_private_graph_endpoint awscc_neptunegraph_private_graph_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphPrivateGraphEndpoint } from '@cdktn/provider-awscc'

new dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint(scope: Construct, id: string, config: DataAwsccNeptunegraphPrivateGraphEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig">DataAwsccNeptunegraphPrivateGraphEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig">DataAwsccNeptunegraphPrivateGraphEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isConstruct"></a>

```typescript
import { dataAwsccNeptunegraphPrivateGraphEndpoint } from '@cdktn/provider-awscc'

dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccNeptunegraphPrivateGraphEndpoint } from '@cdktn/provider-awscc'

dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccNeptunegraphPrivateGraphEndpoint } from '@cdktn/provider-awscc'

dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccNeptunegraphPrivateGraphEndpoint } from '@cdktn/provider-awscc'

dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNeptunegraphPrivateGraphEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNeptunegraphPrivateGraphEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/neptunegraph_private_graph_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNeptunegraphPrivateGraphEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.graphIdentifier">graphIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier">privateGraphEndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `graphIdentifier`<sup>Required</sup> <a name="graphIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.graphIdentifier"></a>

```typescript
public readonly graphIdentifier: string;
```

- *Type:* string

---

##### `privateGraphEndpointIdentifier`<sup>Required</sup> <a name="privateGraphEndpointIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier"></a>

```typescript
public readonly privateGraphEndpointIdentifier: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNeptunegraphPrivateGraphEndpointConfig <a name="DataAwsccNeptunegraphPrivateGraphEndpointConfig" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphPrivateGraphEndpoint } from '@cdktn/provider-awscc'

const dataAwsccNeptunegraphPrivateGraphEndpointConfig: dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptunegraphPrivateGraphEndpoint.DataAwsccNeptunegraphPrivateGraphEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/neptunegraph_private_graph_endpoint#id DataAwsccNeptunegraphPrivateGraphEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




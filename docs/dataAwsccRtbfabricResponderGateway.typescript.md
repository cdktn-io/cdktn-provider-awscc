# `dataAwsccRtbfabricResponderGateway` Submodule <a name="`dataAwsccRtbfabricResponderGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRtbfabricResponderGateway <a name="DataAwsccRtbfabricResponderGateway" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway(scope: Construct, id: string, config: DataAwsccRtbfabricResponderGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig">DataAwsccRtbfabricResponderGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig">DataAwsccRtbfabricResponderGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRtbfabricResponderGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRtbfabricResponderGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRtbfabricResponderGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRtbfabricResponderGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRtbfabricResponderGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.certificateAssociationStatus">certificateAssociationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.externalInboundEndpoint">externalInboundEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayType">gatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.listenerConfig">listenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference">DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.managedEndpointConfiguration">managedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.responderGatewayStatus">responderGatewayStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList">DataAwsccRtbfabricResponderGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.trustStoreConfiguration">trustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `acmCertificateArn`<sup>Required</sup> <a name="acmCertificateArn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateAssociationStatus`<sup>Required</sup> <a name="certificateAssociationStatus" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.certificateAssociationStatus"></a>

```typescript
public readonly certificateAssociationStatus: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `externalInboundEndpoint`<sup>Required</sup> <a name="externalInboundEndpoint" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.externalInboundEndpoint"></a>

```typescript
public readonly externalInboundEndpoint: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `gatewayType`<sup>Required</sup> <a name="gatewayType" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayType"></a>

```typescript
public readonly gatewayType: string;
```

- *Type:* string

---

##### `listenerConfig`<sup>Required</sup> <a name="listenerConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.listenerConfig"></a>

```typescript
public readonly listenerConfig: DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference">DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference</a>

---

##### `managedEndpointConfiguration`<sup>Required</sup> <a name="managedEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.managedEndpointConfiguration"></a>

```typescript
public readonly managedEndpointConfiguration: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `responderGatewayStatus`<sup>Required</sup> <a name="responderGatewayStatus" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.responderGatewayStatus"></a>

```typescript
public readonly responderGatewayStatus: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tags"></a>

```typescript
public readonly tags: DataAwsccRtbfabricResponderGatewayTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList">DataAwsccRtbfabricResponderGatewayTagsList</a>

---

##### `trustStoreConfiguration`<sup>Required</sup> <a name="trustStoreConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.trustStoreConfiguration"></a>

```typescript
public readonly trustStoreConfiguration: DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRtbfabricResponderGatewayConfig <a name="DataAwsccRtbfabricResponderGatewayConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricResponderGatewayConfig: dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rtbfabric_responder_gateway#id DataAwsccRtbfabricResponderGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRtbfabricResponderGatewayListenerConfig <a name="DataAwsccRtbfabricResponderGatewayListenerConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricResponderGatewayListenerConfig: dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig = { ... }
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration: dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration = { ... }
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration: dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration = { ... }
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig: dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig = { ... }
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration: dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration = { ... }
```


### DataAwsccRtbfabricResponderGatewayTags <a name="DataAwsccRtbfabricResponderGatewayTags" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricResponderGatewayTags: dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags = { ... }
```


### DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration <a name="DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricResponderGatewayTrustStoreConfiguration: dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference <a name="DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig">DataAwsccRtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricResponderGatewayListenerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig">DataAwsccRtbfabricResponderGatewayListenerConfig</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs">timeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthyThresholdCount`<sup>Required</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `statusCodeMatcher`<sup>Required</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher"></a>

```typescript
public readonly statusCodeMatcher: string;
```

- *Type:* string

---

##### `timeoutMs`<sup>Required</sup> <a name="timeoutMs" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs"></a>

```typescript
public readonly timeoutMs: number;
```

- *Type:* number

---

##### `unhealthyThresholdCount`<sup>Required</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList">autoScalingGroupNameList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScalingGroupNameList`<sup>Required</sup> <a name="autoScalingGroupNameList" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList"></a>

```typescript
public readonly autoScalingGroupNameList: string[];
```

- *Type:* string[]

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain">clusterApiServerCaCertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri">clusterApiServerEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName">endpointsResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace">endpointsResourceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterApiServerCaCertificateChain`<sup>Required</sup> <a name="clusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain"></a>

```typescript
public readonly clusterApiServerCaCertificateChain: string;
```

- *Type:* string

---

##### `clusterApiServerEndpointUri`<sup>Required</sup> <a name="clusterApiServerEndpointUri" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri"></a>

```typescript
public readonly clusterApiServerEndpointUri: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `endpointsResourceName`<sup>Required</sup> <a name="endpointsResourceName" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName"></a>

```typescript
public readonly endpointsResourceName: string;
```

- *Type:* string

---

##### `endpointsResourceNamespace`<sup>Required</sup> <a name="endpointsResourceNamespace" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace"></a>

```typescript
public readonly endpointsResourceNamespace: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration">autoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration">eksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScalingGroupsConfiguration`<sup>Required</sup> <a name="autoScalingGroupsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration"></a>

```typescript
public readonly autoScalingGroupsConfiguration: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a>

---

##### `eksEndpointsConfiguration`<sup>Required</sup> <a name="eksEndpointsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration"></a>

```typescript
public readonly eksEndpointsConfiguration: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayTagsList <a name="DataAwsccRtbfabricResponderGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricResponderGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricResponderGatewayTagsOutputReference <a name="DataAwsccRtbfabricResponderGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags">DataAwsccRtbfabricResponderGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricResponderGatewayTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags">DataAwsccRtbfabricResponderGatewayTags</a>

---


### DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricResponderGateway } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates">certificateAuthorityCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration">DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityCertificates`<sup>Required</sup> <a name="certificateAuthorityCertificates" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates"></a>

```typescript
public readonly certificateAuthorityCertificates: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration">DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration</a>

---




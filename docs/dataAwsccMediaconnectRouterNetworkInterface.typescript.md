# `dataAwsccMediaconnectRouterNetworkInterface` Submodule <a name="`dataAwsccMediaconnectRouterNetworkInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectRouterNetworkInterface <a name="DataAwsccMediaconnectRouterNetworkInterface" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_router_network_interface awscc_mediaconnect_router_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface(scope: Construct, id: string, config: DataAwsccMediaconnectRouterNetworkInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig">DataAwsccMediaconnectRouterNetworkInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig">DataAwsccMediaconnectRouterNetworkInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isConstruct"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformElement"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectRouterNetworkInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectRouterNetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_router_network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectRouterNetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.associatedInputCount">associatedInputCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.associatedOutputCount">associatedOutputCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.networkInterfaceType">networkInterfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.routerNetworkInterfaceId">routerNetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList">DataAwsccMediaconnectRouterNetworkInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associatedInputCount`<sup>Required</sup> <a name="associatedInputCount" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.associatedInputCount"></a>

```typescript
public readonly associatedInputCount: number;
```

- *Type:* number

---

##### `associatedOutputCount`<sup>Required</sup> <a name="associatedOutputCount" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.associatedOutputCount"></a>

```typescript
public readonly associatedOutputCount: number;
```

- *Type:* number

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkInterfaceType`<sup>Required</sup> <a name="networkInterfaceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.networkInterfaceType"></a>

```typescript
public readonly networkInterfaceType: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `routerNetworkInterfaceId`<sup>Required</sup> <a name="routerNetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.routerNetworkInterfaceId"></a>

```typescript
public readonly routerNetworkInterfaceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediaconnectRouterNetworkInterfaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList">DataAwsccMediaconnectRouterNetworkInterfaceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectRouterNetworkInterfaceConfig <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterNetworkInterfaceConfig: dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_router_network_interface#id DataAwsccMediaconnectRouterNetworkInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectRouterNetworkInterfaceConfiguration <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterNetworkInterfaceConfiguration: dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration = { ... }
```


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic: dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic = { ... }
```


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules: dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules = { ... }
```


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc: dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc = { ... }
```


### DataAwsccMediaconnectRouterNetworkInterfaceTags <a name="DataAwsccMediaconnectRouterNetworkInterfaceTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterNetworkInterfaceTags: dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.public">public</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration">DataAwsccMediaconnectRouterNetworkInterfaceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.public"></a>

```typescript
public readonly public: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpc"></a>

```typescript
public readonly vpc: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterNetworkInterfaceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration">DataAwsccMediaconnectRouterNetworkInterfaceConfiguration</a>

---


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>

---


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRules">allowRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowRules`<sup>Required</sup> <a name="allowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRules"></a>

```typescript
public readonly allowRules: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic</a>

---


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc</a>

---


### DataAwsccMediaconnectRouterNetworkInterfaceTagsList <a name="DataAwsccMediaconnectRouterNetworkInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterNetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags">DataAwsccMediaconnectRouterNetworkInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterNetworkInterfaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags">DataAwsccMediaconnectRouterNetworkInterfaceTags</a>

---




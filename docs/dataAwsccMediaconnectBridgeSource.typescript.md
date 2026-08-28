# `dataAwsccMediaconnectBridgeSource` Submodule <a name="`dataAwsccMediaconnectBridgeSource` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectBridgeSource <a name="DataAwsccMediaconnectBridgeSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource(scope: Construct, id: string, config: DataAwsccMediaconnectBridgeSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig">DataAwsccMediaconnectBridgeSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig">DataAwsccMediaconnectBridgeSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectBridgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isConstruct"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformElement"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediaconnectBridgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectBridgeSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectBridgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_bridge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectBridgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.bridgeArn">bridgeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.flowSource">flowSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference">DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.networkSource">networkSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference">DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `bridgeArn`<sup>Required</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.bridgeArn"></a>

```typescript
public readonly bridgeArn: string;
```

- *Type:* string

---

##### `flowSource`<sup>Required</sup> <a name="flowSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.flowSource"></a>

```typescript
public readonly flowSource: DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference">DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkSource`<sup>Required</sup> <a name="networkSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.networkSource"></a>

```typescript
public readonly networkSource: DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference">DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectBridgeSourceConfig <a name="DataAwsccMediaconnectBridgeSourceConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectBridgeSourceConfig: dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_bridge_source#id DataAwsccMediaconnectBridgeSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectBridgeSourceFlowSource <a name="DataAwsccMediaconnectBridgeSourceFlowSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectBridgeSourceFlowSource: dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource = { ... }
```


### DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment <a name="DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment: dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment = { ... }
```


### DataAwsccMediaconnectBridgeSourceNetworkSource <a name="DataAwsccMediaconnectBridgeSourceNetworkSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectBridgeSourceNetworkSource: dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource = { ... }
```


### DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings <a name="DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings: dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---


### DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference <a name="DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment">flowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource">DataAwsccMediaconnectBridgeSourceFlowSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `flowVpcInterfaceAttachment`<sup>Required</sup> <a name="flowVpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```typescript
public readonly flowVpcInterfaceAttachment: DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectBridgeSourceFlowSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource">DataAwsccMediaconnectBridgeSourceFlowSource</a>

---


### DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference <a name="DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">multicastSourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multicastSourceIp`<sup>Required</sup> <a name="multicastSourceIp" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```typescript
public readonly multicastSourceIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---


### DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference <a name="DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectBridgeSource } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp">multicastIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings">multicastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource">DataAwsccMediaconnectBridgeSourceNetworkSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multicastIp`<sup>Required</sup> <a name="multicastIp" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp"></a>

```typescript
public readonly multicastIp: string;
```

- *Type:* string

---

##### `multicastSourceSettings`<sup>Required</sup> <a name="multicastSourceSettings" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```typescript
public readonly multicastSourceSettings: DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectBridgeSourceNetworkSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource">DataAwsccMediaconnectBridgeSourceNetworkSource</a>

---




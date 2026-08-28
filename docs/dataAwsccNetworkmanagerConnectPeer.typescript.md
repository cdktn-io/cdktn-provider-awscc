# `dataAwsccNetworkmanagerConnectPeer` Submodule <a name="`dataAwsccNetworkmanagerConnectPeer` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerConnectPeer <a name="DataAwsccNetworkmanagerConnectPeer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_connect_peer awscc_networkmanager_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer(scope: Construct, id: string, config: DataAwsccNetworkmanagerConnectPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig">DataAwsccNetworkmanagerConnectPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig">DataAwsccNetworkmanagerConnectPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isConstruct"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkmanagerConnectPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkmanagerConnectPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_connect_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerConnectPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference">DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference">DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.connectAttachmentId">connectAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.connectPeerId">connectPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.lastModificationErrors">lastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.subnetArn">subnetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList">DataAwsccNetworkmanagerConnectPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `bgpOptions`<sup>Required</sup> <a name="bgpOptions" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.bgpOptions"></a>

```typescript
public readonly bgpOptions: DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference">DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference">DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference</a>

---

##### `connectAttachmentId`<sup>Required</sup> <a name="connectAttachmentId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.connectAttachmentId"></a>

```typescript
public readonly connectAttachmentId: string;
```

- *Type:* string

---

##### `connectPeerId`<sup>Required</sup> <a name="connectPeerId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.connectPeerId"></a>

```typescript
public readonly connectPeerId: string;
```

- *Type:* string

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.coreNetworkAddress"></a>

```typescript
public readonly coreNetworkAddress: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.lastModificationErrors"></a>

```typescript
public readonly lastModificationErrors: string[];
```

- *Type:* string[]

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetArn`<sup>Required</sup> <a name="subnetArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.subnetArn"></a>

```typescript
public readonly subnetArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkmanagerConnectPeerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList">DataAwsccNetworkmanagerConnectPeerTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerConnectPeerBgpOptions <a name="DataAwsccNetworkmanagerConnectPeerBgpOptions" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerConnectPeerBgpOptions: dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions = { ... }
```


### DataAwsccNetworkmanagerConnectPeerConfig <a name="DataAwsccNetworkmanagerConnectPeerConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerConnectPeerConfig: dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_connect_peer#id DataAwsccNetworkmanagerConnectPeer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerConnectPeerConfiguration <a name="DataAwsccNetworkmanagerConnectPeerConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerConnectPeerConfiguration: dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration = { ... }
```


### DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations <a name="DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations: dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations = { ... }
```


### DataAwsccNetworkmanagerConnectPeerTags <a name="DataAwsccNetworkmanagerConnectPeerTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerConnectPeerTags: dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference <a name="DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions">DataAwsccNetworkmanagerConnectPeerBgpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerConnectPeerBgpOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions">DataAwsccNetworkmanagerConnectPeerBgpOptions</a>

---


### DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList <a name="DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference <a name="DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn">coreNetworkAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations">DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress"></a>

```typescript
public readonly coreNetworkAddress: string;
```

- *Type:* string

---

##### `coreNetworkAsn`<sup>Required</sup> <a name="coreNetworkAsn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn"></a>

```typescript
public readonly coreNetworkAsn: number;
```

- *Type:* number

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations">DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations</a>

---


### DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference <a name="DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations">bgpConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList">DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration">DataAwsccNetworkmanagerConnectPeerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpConfigurations`<sup>Required</sup> <a name="bgpConfigurations" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations"></a>

```typescript
public readonly bgpConfigurations: DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList">DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a>

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress"></a>

```typescript
public readonly coreNetworkAddress: string;
```

- *Type:* string

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerConnectPeerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration">DataAwsccNetworkmanagerConnectPeerConfiguration</a>

---


### DataAwsccNetworkmanagerConnectPeerTagsList <a name="DataAwsccNetworkmanagerConnectPeerTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerConnectPeerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerConnectPeerTagsOutputReference <a name="DataAwsccNetworkmanagerConnectPeerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerConnectPeer } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags">DataAwsccNetworkmanagerConnectPeerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerConnectPeerTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags">DataAwsccNetworkmanagerConnectPeerTags</a>

---




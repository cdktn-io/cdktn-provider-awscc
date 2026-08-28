# `dataAwsccEc2VpnConnection` Submodule <a name="`dataAwsccEc2VpnConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VpnConnection <a name="DataAwsccEc2VpnConnection" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_vpn_connection awscc_ec2_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection(scope: Construct, id: string, config: DataAwsccEc2VpnConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig">DataAwsccEc2VpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig">DataAwsccEc2VpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VpnConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isConstruct"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformElement"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2VpnConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VpnConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.customerGatewayId">customerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.enableAcceleration">enableAcceleration</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.localIpv6NetworkCidr">localIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.preSharedKeyStorage">preSharedKeyStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.remoteIpv6NetworkCidr">remoteIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList">DataAwsccEc2VpnConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.transportTransitGatewayAttachmentId">transportTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tunnelBandwidth">tunnelBandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnConcentratorId">vpnConcentratorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnConnectionId">vpnConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnTunnelOptionsSpecifications">vpnTunnelOptionsSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.customerGatewayId"></a>

```typescript
public readonly customerGatewayId: string;
```

- *Type:* string

---

##### `enableAcceleration`<sup>Required</sup> <a name="enableAcceleration" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.enableAcceleration"></a>

```typescript
public readonly enableAcceleration: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `localIpv4NetworkCidr`<sup>Required</sup> <a name="localIpv4NetworkCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.localIpv4NetworkCidr"></a>

```typescript
public readonly localIpv4NetworkCidr: string;
```

- *Type:* string

---

##### `localIpv6NetworkCidr`<sup>Required</sup> <a name="localIpv6NetworkCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.localIpv6NetworkCidr"></a>

```typescript
public readonly localIpv6NetworkCidr: string;
```

- *Type:* string

---

##### `outsideIpAddressType`<sup>Required</sup> <a name="outsideIpAddressType" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.outsideIpAddressType"></a>

```typescript
public readonly outsideIpAddressType: string;
```

- *Type:* string

---

##### `preSharedKeyStorage`<sup>Required</sup> <a name="preSharedKeyStorage" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.preSharedKeyStorage"></a>

```typescript
public readonly preSharedKeyStorage: string;
```

- *Type:* string

---

##### `remoteIpv4NetworkCidr`<sup>Required</sup> <a name="remoteIpv4NetworkCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.remoteIpv4NetworkCidr"></a>

```typescript
public readonly remoteIpv4NetworkCidr: string;
```

- *Type:* string

---

##### `remoteIpv6NetworkCidr`<sup>Required</sup> <a name="remoteIpv6NetworkCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.remoteIpv6NetworkCidr"></a>

```typescript
public readonly remoteIpv6NetworkCidr: string;
```

- *Type:* string

---

##### `staticRoutesOnly`<sup>Required</sup> <a name="staticRoutesOnly" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.staticRoutesOnly"></a>

```typescript
public readonly staticRoutesOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2VpnConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList">DataAwsccEc2VpnConnectionTagsList</a>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `transportTransitGatewayAttachmentId`<sup>Required</sup> <a name="transportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```typescript
public readonly transportTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `tunnelBandwidth`<sup>Required</sup> <a name="tunnelBandwidth" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tunnelBandwidth"></a>

```typescript
public readonly tunnelBandwidth: string;
```

- *Type:* string

---

##### `tunnelInsideIpVersion`<sup>Required</sup> <a name="tunnelInsideIpVersion" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tunnelInsideIpVersion"></a>

```typescript
public readonly tunnelInsideIpVersion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpnConcentratorId`<sup>Required</sup> <a name="vpnConcentratorId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnConcentratorId"></a>

```typescript
public readonly vpnConcentratorId: string;
```

- *Type:* string

---

##### `vpnConnectionId`<sup>Required</sup> <a name="vpnConnectionId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnConnectionId"></a>

```typescript
public readonly vpnConnectionId: string;
```

- *Type:* string

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

##### `vpnTunnelOptionsSpecifications`<sup>Required</sup> <a name="vpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnTunnelOptionsSpecifications"></a>

```typescript
public readonly vpnTunnelOptionsSpecifications: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VpnConnectionConfig <a name="DataAwsccEc2VpnConnectionConfig" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionConfig: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_vpn_connection#id DataAwsccEc2VpnConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VpnConnectionTags <a name="DataAwsccEc2VpnConnectionTags" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionTags: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms = { ... }
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms: dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VpnConnectionTagsList <a name="DataAwsccEc2VpnConnectionTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionTagsOutputReference <a name="DataAwsccEc2VpnConnectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags">DataAwsccEc2VpnConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags">DataAwsccEc2VpnConnectionTags</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled">bgpLogEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn">bgpLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat">bgpLogOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">logEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">logOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpLogEnabled`<sup>Required</sup> <a name="bgpLogEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled"></a>

```typescript
public readonly bgpLogEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `bgpLogGroupArn`<sup>Required</sup> <a name="bgpLogGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn"></a>

```typescript
public readonly bgpLogGroupArn: string;
```

- *Type:* string

---

##### `bgpLogOutputFormat`<sup>Required</sup> <a name="bgpLogOutputFormat" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat"></a>

```typescript
public readonly bgpLogOutputFormat: string;
```

- *Type:* string

---

##### `logEnabled`<sup>Required</sup> <a name="logEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```typescript
public readonly logEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `logOutputFormat`<sup>Required</sup> <a name="logOutputFormat" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```typescript
public readonly logOutputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogOptions`<sup>Required</sup> <a name="cloudwatchLogOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```typescript
public readonly cloudwatchLogOptions: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction">dpdTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl">enableTunnelLifecycleControl</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions">ikeVersions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions">logOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers">phase1DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms">phase1EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds">phase1LifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers">phase2DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms">phase2EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds">phase2LifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey">preSharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage">rekeyFuzzPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds">rekeyMarginTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize">replayWindowSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction">startupAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr">tunnelInsideCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr">tunnelInsideIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dpdTimeoutAction`<sup>Required</sup> <a name="dpdTimeoutAction" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction"></a>

```typescript
public readonly dpdTimeoutAction: string;
```

- *Type:* string

---

##### `dpdTimeoutSeconds`<sup>Required</sup> <a name="dpdTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds"></a>

```typescript
public readonly dpdTimeoutSeconds: number;
```

- *Type:* number

---

##### `enableTunnelLifecycleControl`<sup>Required</sup> <a name="enableTunnelLifecycleControl" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl"></a>

```typescript
public readonly enableTunnelLifecycleControl: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ikeVersions`<sup>Required</sup> <a name="ikeVersions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions"></a>

```typescript
public readonly ikeVersions: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a>

---

##### `logOptions`<sup>Required</sup> <a name="logOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions"></a>

```typescript
public readonly logOptions: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a>

---

##### `phase1DhGroupNumbers`<sup>Required</sup> <a name="phase1DhGroupNumbers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers"></a>

```typescript
public readonly phase1DhGroupNumbers: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a>

---

##### `phase1EncryptionAlgorithms`<sup>Required</sup> <a name="phase1EncryptionAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms"></a>

```typescript
public readonly phase1EncryptionAlgorithms: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a>

---

##### `phase1IntegrityAlgorithms`<sup>Required</sup> <a name="phase1IntegrityAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms"></a>

```typescript
public readonly phase1IntegrityAlgorithms: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a>

---

##### `phase1LifetimeSeconds`<sup>Required</sup> <a name="phase1LifetimeSeconds" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds"></a>

```typescript
public readonly phase1LifetimeSeconds: number;
```

- *Type:* number

---

##### `phase2DhGroupNumbers`<sup>Required</sup> <a name="phase2DhGroupNumbers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers"></a>

```typescript
public readonly phase2DhGroupNumbers: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a>

---

##### `phase2EncryptionAlgorithms`<sup>Required</sup> <a name="phase2EncryptionAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms"></a>

```typescript
public readonly phase2EncryptionAlgorithms: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a>

---

##### `phase2IntegrityAlgorithms`<sup>Required</sup> <a name="phase2IntegrityAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms"></a>

```typescript
public readonly phase2IntegrityAlgorithms: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a>

---

##### `phase2LifetimeSeconds`<sup>Required</sup> <a name="phase2LifetimeSeconds" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds"></a>

```typescript
public readonly phase2LifetimeSeconds: number;
```

- *Type:* number

---

##### `preSharedKey`<sup>Required</sup> <a name="preSharedKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey"></a>

```typescript
public readonly preSharedKey: string;
```

- *Type:* string

---

##### `rekeyFuzzPercentage`<sup>Required</sup> <a name="rekeyFuzzPercentage" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage"></a>

```typescript
public readonly rekeyFuzzPercentage: number;
```

- *Type:* number

---

##### `rekeyMarginTimeSeconds`<sup>Required</sup> <a name="rekeyMarginTimeSeconds" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds"></a>

```typescript
public readonly rekeyMarginTimeSeconds: number;
```

- *Type:* number

---

##### `replayWindowSize`<sup>Required</sup> <a name="replayWindowSize" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize"></a>

```typescript
public readonly replayWindowSize: number;
```

- *Type:* number

---

##### `startupAction`<sup>Required</sup> <a name="startupAction" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction"></a>

```typescript
public readonly startupAction: string;
```

- *Type:* string

---

##### `tunnelInsideCidr`<sup>Required</sup> <a name="tunnelInsideCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr"></a>

```typescript
public readonly tunnelInsideCidr: string;
```

- *Type:* string

---

##### `tunnelInsideIpv6Cidr`<sup>Required</sup> <a name="tunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr"></a>

```typescript
public readonly tunnelInsideIpv6Cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnection } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>

---




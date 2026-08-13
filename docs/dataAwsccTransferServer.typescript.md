# `dataAwsccTransferServer` Submodule <a name="`dataAwsccTransferServer` Submodule" id="@cdktn/provider-awscc.dataAwsccTransferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTransferServer <a name="DataAwsccTransferServer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/transfer_server awscc_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServer(scope: Construct, id: string, config: DataAwsccTransferServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig">DataAwsccTransferServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig">DataAwsccTransferServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTransferServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isConstruct"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

dataAwsccTransferServer.DataAwsccTransferServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformElement"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

dataAwsccTransferServer.DataAwsccTransferServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformDataSource"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

dataAwsccTransferServer.DataAwsccTransferServer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccTransferServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTransferServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTransferServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/transfer_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTransferServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.as2ServiceManagedEgressIpAddresses">as2ServiceManagedEgressIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference">DataAwsccTransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.identityProviderDetails">identityProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference">DataAwsccTransferServerIdentityProviderDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.loggingRole">loggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.protocolDetails">protocolDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference">DataAwsccTransferServerProtocolDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.s3StorageOptions">s3StorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference">DataAwsccTransferServerS3StorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.structuredLogDestinations">structuredLogDestinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList">DataAwsccTransferServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.workflowDetails">workflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference">DataAwsccTransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `as2ServiceManagedEgressIpAddresses`<sup>Required</sup> <a name="as2ServiceManagedEgressIpAddresses" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.as2ServiceManagedEgressIpAddresses"></a>

```typescript
public readonly as2ServiceManagedEgressIpAddresses: string[];
```

- *Type:* string[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: DataAwsccTransferServerEndpointDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference">DataAwsccTransferServerEndpointDetailsOutputReference</a>

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: DataAwsccTransferServerIdentityProviderDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference">DataAwsccTransferServerIdentityProviderDetailsOutputReference</a>

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `loggingRole`<sup>Required</sup> <a name="loggingRole" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

---

##### `postAuthenticationLoginBanner`<sup>Required</sup> <a name="postAuthenticationLoginBanner" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.postAuthenticationLoginBanner"></a>

```typescript
public readonly postAuthenticationLoginBanner: string;
```

- *Type:* string

---

##### `preAuthenticationLoginBanner`<sup>Required</sup> <a name="preAuthenticationLoginBanner" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.preAuthenticationLoginBanner"></a>

```typescript
public readonly preAuthenticationLoginBanner: string;
```

- *Type:* string

---

##### `protocolDetails`<sup>Required</sup> <a name="protocolDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.protocolDetails"></a>

```typescript
public readonly protocolDetails: DataAwsccTransferServerProtocolDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference">DataAwsccTransferServerProtocolDetailsOutputReference</a>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `s3StorageOptions`<sup>Required</sup> <a name="s3StorageOptions" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.s3StorageOptions"></a>

```typescript
public readonly s3StorageOptions: DataAwsccTransferServerS3StorageOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference">DataAwsccTransferServerS3StorageOptionsOutputReference</a>

---

##### `securityPolicyName`<sup>Required</sup> <a name="securityPolicyName" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `structuredLogDestinations`<sup>Required</sup> <a name="structuredLogDestinations" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.structuredLogDestinations"></a>

```typescript
public readonly structuredLogDestinations: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.tags"></a>

```typescript
public readonly tags: DataAwsccTransferServerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList">DataAwsccTransferServerTagsList</a>

---

##### `workflowDetails`<sup>Required</sup> <a name="workflowDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.workflowDetails"></a>

```typescript
public readonly workflowDetails: DataAwsccTransferServerWorkflowDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference">DataAwsccTransferServerWorkflowDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTransferServerConfig <a name="DataAwsccTransferServerConfig" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerConfig: dataAwsccTransferServer.DataAwsccTransferServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/transfer_server#id DataAwsccTransferServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTransferServerEndpointDetails <a name="DataAwsccTransferServerEndpointDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerEndpointDetails: dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails = { ... }
```


### DataAwsccTransferServerIdentityProviderDetails <a name="DataAwsccTransferServerIdentityProviderDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerIdentityProviderDetails: dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails = { ... }
```


### DataAwsccTransferServerProtocolDetails <a name="DataAwsccTransferServerProtocolDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerProtocolDetails: dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails = { ... }
```


### DataAwsccTransferServerS3StorageOptions <a name="DataAwsccTransferServerS3StorageOptions" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerS3StorageOptions: dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions = { ... }
```


### DataAwsccTransferServerTags <a name="DataAwsccTransferServerTags" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTags.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerTags: dataAwsccTransferServer.DataAwsccTransferServerTags = { ... }
```


### DataAwsccTransferServerWorkflowDetails <a name="DataAwsccTransferServerWorkflowDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerWorkflowDetails: dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails = { ... }
```


### DataAwsccTransferServerWorkflowDetailsOnPartialUpload <a name="DataAwsccTransferServerWorkflowDetailsOnPartialUpload" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerWorkflowDetailsOnPartialUpload: dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload = { ... }
```


### DataAwsccTransferServerWorkflowDetailsOnUpload <a name="DataAwsccTransferServerWorkflowDetailsOnUpload" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

const dataAwsccTransferServerWorkflowDetailsOnUpload: dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTransferServerEndpointDetailsOutputReference <a name="DataAwsccTransferServerEndpointDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.addressAllocationIds">addressAllocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails">DataAwsccTransferServerEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressAllocationIds`<sup>Required</sup> <a name="addressAllocationIds" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```typescript
public readonly addressAllocationIds: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferServerEndpointDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails">DataAwsccTransferServerEndpointDetails</a>

---


### DataAwsccTransferServerIdentityProviderDetailsOutputReference <a name="DataAwsccTransferServerIdentityProviderDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.invocationRole">invocationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethods">sftpAuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails">DataAwsccTransferServerIdentityProviderDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `invocationRole`<sup>Required</sup> <a name="invocationRole" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.invocationRole"></a>

```typescript
public readonly invocationRole: string;
```

- *Type:* string

---

##### `sftpAuthenticationMethods`<sup>Required</sup> <a name="sftpAuthenticationMethods" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethods"></a>

```typescript
public readonly sftpAuthenticationMethods: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferServerIdentityProviderDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails">DataAwsccTransferServerIdentityProviderDetails</a>

---


### DataAwsccTransferServerProtocolDetailsOutputReference <a name="DataAwsccTransferServerProtocolDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.as2Transports">as2Transports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.passiveIp">passiveIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.setStatOption">setStatOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode">tlsSessionResumptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails">DataAwsccTransferServerProtocolDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `as2Transports`<sup>Required</sup> <a name="as2Transports" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.as2Transports"></a>

```typescript
public readonly as2Transports: string[];
```

- *Type:* string[]

---

##### `passiveIp`<sup>Required</sup> <a name="passiveIp" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.passiveIp"></a>

```typescript
public readonly passiveIp: string;
```

- *Type:* string

---

##### `setStatOption`<sup>Required</sup> <a name="setStatOption" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.setStatOption"></a>

```typescript
public readonly setStatOption: string;
```

- *Type:* string

---

##### `tlsSessionResumptionMode`<sup>Required</sup> <a name="tlsSessionResumptionMode" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode"></a>

```typescript
public readonly tlsSessionResumptionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferServerProtocolDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails">DataAwsccTransferServerProtocolDetails</a>

---


### DataAwsccTransferServerS3StorageOptionsOutputReference <a name="DataAwsccTransferServerS3StorageOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization">directoryListingOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions">DataAwsccTransferServerS3StorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryListingOptimization`<sup>Required</sup> <a name="directoryListingOptimization" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization"></a>

```typescript
public readonly directoryListingOptimization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferServerS3StorageOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions">DataAwsccTransferServerS3StorageOptions</a>

---


### DataAwsccTransferServerTagsList <a name="DataAwsccTransferServerTagsList" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.get"></a>

```typescript
public get(index: number): DataAwsccTransferServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccTransferServerTagsOutputReference <a name="DataAwsccTransferServerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTags">DataAwsccTransferServerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferServerTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTags">DataAwsccTransferServerTags</a>

---


### DataAwsccTransferServerWorkflowDetailsOnPartialUploadList <a name="DataAwsccTransferServerWorkflowDetailsOnPartialUploadList" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.get"></a>

```typescript
public get(index: number): DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference <a name="DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload">DataAwsccTransferServerWorkflowDetailsOnPartialUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferServerWorkflowDetailsOnPartialUpload;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload">DataAwsccTransferServerWorkflowDetailsOnPartialUpload</a>

---


### DataAwsccTransferServerWorkflowDetailsOnUploadList <a name="DataAwsccTransferServerWorkflowDetailsOnUploadList" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.get"></a>

```typescript
public get(index: number): DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference <a name="DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload">DataAwsccTransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferServerWorkflowDetailsOnUpload;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload">DataAwsccTransferServerWorkflowDetailsOnUpload</a>

---


### DataAwsccTransferServerWorkflowDetailsOutputReference <a name="DataAwsccTransferServerWorkflowDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferServer } from '@cdktn/provider-awscc'

new dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.onPartialUpload">onPartialUpload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList">DataAwsccTransferServerWorkflowDetailsOnPartialUploadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.onUpload">onUpload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList">DataAwsccTransferServerWorkflowDetailsOnUploadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails">DataAwsccTransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onPartialUpload`<sup>Required</sup> <a name="onPartialUpload" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.onPartialUpload"></a>

```typescript
public readonly onPartialUpload: DataAwsccTransferServerWorkflowDetailsOnPartialUploadList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList">DataAwsccTransferServerWorkflowDetailsOnPartialUploadList</a>

---

##### `onUpload`<sup>Required</sup> <a name="onUpload" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```typescript
public readonly onUpload: DataAwsccTransferServerWorkflowDetailsOnUploadList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList">DataAwsccTransferServerWorkflowDetailsOnUploadList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferServerWorkflowDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails">DataAwsccTransferServerWorkflowDetails</a>

---




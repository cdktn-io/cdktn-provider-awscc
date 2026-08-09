# `transferServer` Submodule <a name="`transferServer` Submodule" id="@cdktn/provider-awscc.transferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferServer <a name="TransferServer" id="@cdktn/provider-awscc.transferServer.TransferServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server awscc_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServer(scope: Construct, id: string, config?: TransferServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig">TransferServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig">TransferServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails">putEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails">putIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails">putProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putS3StorageOptions">putS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putWorkflowDetails">putWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetEndpointDetails">resetEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetIdentityProviderDetails">resetIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetIdentityProviderType">resetIdentityProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetLoggingRole">resetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetPostAuthenticationLoginBanner">resetPostAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetPreAuthenticationLoginBanner">resetPreAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetProtocolDetails">resetProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetS3StorageOptions">resetS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetSecurityPolicyName">resetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetStructuredLogDestinations">resetStructuredLogDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetWorkflowDetails">resetWorkflowDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferServer.TransferServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferServer.TransferServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transferServer.TransferServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferServer.TransferServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transferServer.TransferServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferServer.TransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transferServer.TransferServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transferServer.TransferServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transferServer.TransferServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transferServer.TransferServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transferServer.TransferServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferServer.TransferServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transferServer.TransferServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transferServer.TransferServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transferServer.TransferServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transferServer.TransferServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferServer.TransferServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferServer.TransferServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transferServer.TransferServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointDetails` <a name="putEndpointDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails"></a>

```typescript
public putEndpointDetails(value: TransferServerEndpointDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `putIdentityProviderDetails` <a name="putIdentityProviderDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails"></a>

```typescript
public putIdentityProviderDetails(value: TransferServerIdentityProviderDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a>

---

##### `putProtocolDetails` <a name="putProtocolDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails"></a>

```typescript
public putProtocolDetails(value: TransferServerProtocolDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---

##### `putS3StorageOptions` <a name="putS3StorageOptions" id="@cdktn/provider-awscc.transferServer.TransferServer.putS3StorageOptions"></a>

```typescript
public putS3StorageOptions(value: TransferServerS3StorageOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.putS3StorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferServer.TransferServer.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferServerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>[]

---

##### `putWorkflowDetails` <a name="putWorkflowDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.putWorkflowDetails"></a>

```typescript
public putWorkflowDetails(value: TransferServerWorkflowDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.putWorkflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-awscc.transferServer.TransferServer.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.transferServer.TransferServer.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetEndpointDetails` <a name="resetEndpointDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.resetEndpointDetails"></a>

```typescript
public resetEndpointDetails(): void
```

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktn/provider-awscc.transferServer.TransferServer.resetEndpointType"></a>

```typescript
public resetEndpointType(): void
```

##### `resetIdentityProviderDetails` <a name="resetIdentityProviderDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.resetIdentityProviderDetails"></a>

```typescript
public resetIdentityProviderDetails(): void
```

##### `resetIdentityProviderType` <a name="resetIdentityProviderType" id="@cdktn/provider-awscc.transferServer.TransferServer.resetIdentityProviderType"></a>

```typescript
public resetIdentityProviderType(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.transferServer.TransferServer.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetLoggingRole` <a name="resetLoggingRole" id="@cdktn/provider-awscc.transferServer.TransferServer.resetLoggingRole"></a>

```typescript
public resetLoggingRole(): void
```

##### `resetPostAuthenticationLoginBanner` <a name="resetPostAuthenticationLoginBanner" id="@cdktn/provider-awscc.transferServer.TransferServer.resetPostAuthenticationLoginBanner"></a>

```typescript
public resetPostAuthenticationLoginBanner(): void
```

##### `resetPreAuthenticationLoginBanner` <a name="resetPreAuthenticationLoginBanner" id="@cdktn/provider-awscc.transferServer.TransferServer.resetPreAuthenticationLoginBanner"></a>

```typescript
public resetPreAuthenticationLoginBanner(): void
```

##### `resetProtocolDetails` <a name="resetProtocolDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.resetProtocolDetails"></a>

```typescript
public resetProtocolDetails(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-awscc.transferServer.TransferServer.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetS3StorageOptions` <a name="resetS3StorageOptions" id="@cdktn/provider-awscc.transferServer.TransferServer.resetS3StorageOptions"></a>

```typescript
public resetS3StorageOptions(): void
```

##### `resetSecurityPolicyName` <a name="resetSecurityPolicyName" id="@cdktn/provider-awscc.transferServer.TransferServer.resetSecurityPolicyName"></a>

```typescript
public resetSecurityPolicyName(): void
```

##### `resetStructuredLogDestinations` <a name="resetStructuredLogDestinations" id="@cdktn/provider-awscc.transferServer.TransferServer.resetStructuredLogDestinations"></a>

```typescript
public resetStructuredLogDestinations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferServer.TransferServer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkflowDetails` <a name="resetWorkflowDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.resetWorkflowDetails"></a>

```typescript
public resetWorkflowDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransferServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transferServer.TransferServer.isConstruct"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

transferServer.TransferServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferServer.TransferServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transferServer.TransferServer.isTerraformElement"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

transferServer.TransferServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferServer.TransferServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transferServer.TransferServer.isTerraformResource"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

transferServer.TransferServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferServer.TransferServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

transferServer.TransferServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransferServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.as2ServiceManagedEgressIpAddresses">as2ServiceManagedEgressIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderDetails">identityProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference">TransferServerIdentityProviderDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.protocolDetails">protocolDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference">TransferServerProtocolDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.s3StorageOptions">s3StorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference">TransferServerS3StorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList">TransferServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.workflowDetails">workflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.endpointDetailsInput">endpointDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderDetailsInput">identityProviderDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderTypeInput">identityProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.loggingRoleInput">loggingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.postAuthenticationLoginBannerInput">postAuthenticationLoginBannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.preAuthenticationLoginBannerInput">preAuthenticationLoginBannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.protocolDetailsInput">protocolDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.s3StorageOptionsInput">s3StorageOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.securityPolicyNameInput">securityPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.structuredLogDestinationsInput">structuredLogDestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.workflowDetailsInput">workflowDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.loggingRole">loggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.structuredLogDestinations">structuredLogDestinations</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferServer.TransferServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transferServer.TransferServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transferServer.TransferServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transferServer.TransferServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transferServer.TransferServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transferServer.TransferServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferServer.TransferServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferServer.TransferServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferServer.TransferServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferServer.TransferServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferServer.TransferServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferServer.TransferServer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferServer.TransferServer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `as2ServiceManagedEgressIpAddresses`<sup>Required</sup> <a name="as2ServiceManagedEgressIpAddresses" id="@cdktn/provider-awscc.transferServer.TransferServer.property.as2ServiceManagedEgressIpAddresses"></a>

```typescript
public readonly as2ServiceManagedEgressIpAddresses: string[];
```

- *Type:* string[]

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: TransferServerEndpointDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: TransferServerIdentityProviderDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference">TransferServerIdentityProviderDetailsOutputReference</a>

---

##### `protocolDetails`<sup>Required</sup> <a name="protocolDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.property.protocolDetails"></a>

```typescript
public readonly protocolDetails: TransferServerProtocolDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference">TransferServerProtocolDetailsOutputReference</a>

---

##### `s3StorageOptions`<sup>Required</sup> <a name="s3StorageOptions" id="@cdktn/provider-awscc.transferServer.TransferServer.property.s3StorageOptions"></a>

```typescript
public readonly s3StorageOptions: TransferServerS3StorageOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference">TransferServerS3StorageOptionsOutputReference</a>

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.transferServer.TransferServer.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.transferServer.TransferServer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferServer.TransferServer.property.tags"></a>

```typescript
public readonly tags: TransferServerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList">TransferServerTagsList</a>

---

##### `workflowDetails`<sup>Required</sup> <a name="workflowDetails" id="@cdktn/provider-awscc.transferServer.TransferServer.property.workflowDetails"></a>

```typescript
public readonly workflowDetails: TransferServerWorkflowDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `endpointDetailsInput`<sup>Optional</sup> <a name="endpointDetailsInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.endpointDetailsInput"></a>

```typescript
public readonly endpointDetailsInput: IResolvable | TransferServerEndpointDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `identityProviderDetailsInput`<sup>Optional</sup> <a name="identityProviderDetailsInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderDetailsInput"></a>

```typescript
public readonly identityProviderDetailsInput: IResolvable | TransferServerIdentityProviderDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a>

---

##### `identityProviderTypeInput`<sup>Optional</sup> <a name="identityProviderTypeInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderTypeInput"></a>

```typescript
public readonly identityProviderTypeInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `loggingRoleInput`<sup>Optional</sup> <a name="loggingRoleInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.loggingRoleInput"></a>

```typescript
public readonly loggingRoleInput: string;
```

- *Type:* string

---

##### `postAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="postAuthenticationLoginBannerInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.postAuthenticationLoginBannerInput"></a>

```typescript
public readonly postAuthenticationLoginBannerInput: string;
```

- *Type:* string

---

##### `preAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="preAuthenticationLoginBannerInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.preAuthenticationLoginBannerInput"></a>

```typescript
public readonly preAuthenticationLoginBannerInput: string;
```

- *Type:* string

---

##### `protocolDetailsInput`<sup>Optional</sup> <a name="protocolDetailsInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.protocolDetailsInput"></a>

```typescript
public readonly protocolDetailsInput: IResolvable | TransferServerProtocolDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `s3StorageOptionsInput`<sup>Optional</sup> <a name="s3StorageOptionsInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.s3StorageOptionsInput"></a>

```typescript
public readonly s3StorageOptionsInput: IResolvable | TransferServerS3StorageOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---

##### `securityPolicyNameInput`<sup>Optional</sup> <a name="securityPolicyNameInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.securityPolicyNameInput"></a>

```typescript
public readonly securityPolicyNameInput: string;
```

- *Type:* string

---

##### `structuredLogDestinationsInput`<sup>Optional</sup> <a name="structuredLogDestinationsInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.structuredLogDestinationsInput"></a>

```typescript
public readonly structuredLogDestinationsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>[]

---

##### `workflowDetailsInput`<sup>Optional</sup> <a name="workflowDetailsInput" id="@cdktn/provider-awscc.transferServer.TransferServer.property.workflowDetailsInput"></a>

```typescript
public readonly workflowDetailsInput: IResolvable | TransferServerWorkflowDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.transferServer.TransferServer.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.transferServer.TransferServer.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.transferServer.TransferServer.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferServer.TransferServer.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `loggingRole`<sup>Required</sup> <a name="loggingRole" id="@cdktn/provider-awscc.transferServer.TransferServer.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

---

##### `postAuthenticationLoginBanner`<sup>Required</sup> <a name="postAuthenticationLoginBanner" id="@cdktn/provider-awscc.transferServer.TransferServer.property.postAuthenticationLoginBanner"></a>

```typescript
public readonly postAuthenticationLoginBanner: string;
```

- *Type:* string

---

##### `preAuthenticationLoginBanner`<sup>Required</sup> <a name="preAuthenticationLoginBanner" id="@cdktn/provider-awscc.transferServer.TransferServer.property.preAuthenticationLoginBanner"></a>

```typescript
public readonly preAuthenticationLoginBanner: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.transferServer.TransferServer.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `securityPolicyName`<sup>Required</sup> <a name="securityPolicyName" id="@cdktn/provider-awscc.transferServer.TransferServer.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

---

##### `structuredLogDestinations`<sup>Required</sup> <a name="structuredLogDestinations" id="@cdktn/provider-awscc.transferServer.TransferServer.property.structuredLogDestinations"></a>

```typescript
public readonly structuredLogDestinations: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferServer.TransferServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferServerConfig <a name="TransferServerConfig" id="@cdktn/provider-awscc.transferServer.TransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerConfig: transferServer.TransferServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.identityProviderDetails">identityProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#identity_provider_details TransferServer#identity_provider_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#ip_address_type TransferServer#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.loggingRole">loggingRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.protocolDetails">protocolDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.s3StorageOptions">s3StorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.structuredLogDestinations">structuredLogDestinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.workflowDetails">workflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#certificate TransferServer#certificate}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#domain TransferServer#domain}.

---

##### `endpointDetails`<sup>Optional</sup> <a name="endpointDetails" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: TransferServerEndpointDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}.

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `identityProviderDetails`<sup>Optional</sup> <a name="identityProviderDetails" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: TransferServerIdentityProviderDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#identity_provider_details TransferServer#identity_provider_details}.

---

##### `identityProviderType`<sup>Optional</sup> <a name="identityProviderType" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#ip_address_type TransferServer#ip_address_type}.

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}.

---

##### `postAuthenticationLoginBanner`<sup>Optional</sup> <a name="postAuthenticationLoginBanner" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner"></a>

```typescript
public readonly postAuthenticationLoginBanner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `preAuthenticationLoginBanner`<sup>Optional</sup> <a name="preAuthenticationLoginBanner" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner"></a>

```typescript
public readonly preAuthenticationLoginBanner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `protocolDetails`<sup>Optional</sup> <a name="protocolDetails" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.protocolDetails"></a>

```typescript
public readonly protocolDetails: TransferServerProtocolDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#protocols TransferServer#protocols}.

---

##### `s3StorageOptions`<sup>Optional</sup> <a name="s3StorageOptions" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.s3StorageOptions"></a>

```typescript
public readonly s3StorageOptions: TransferServerS3StorageOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}.

---

##### `securityPolicyName`<sup>Optional</sup> <a name="securityPolicyName" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `structuredLogDestinations`<sup>Optional</sup> <a name="structuredLogDestinations" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.structuredLogDestinations"></a>

```typescript
public readonly structuredLogDestinations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#tags TransferServer#tags}.

---

##### `workflowDetails`<sup>Optional</sup> <a name="workflowDetails" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.workflowDetails"></a>

```typescript
public readonly workflowDetails: TransferServerWorkflowDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}.

---

### TransferServerEndpointDetails <a name="TransferServerEndpointDetails" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerEndpointDetails: transferServer.TransferServerEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.addressAllocationIds">addressAllocationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}. |

---

##### `addressAllocationIds`<sup>Optional</sup> <a name="addressAllocationIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.addressAllocationIds"></a>

```typescript
public readonly addressAllocationIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}.

---

### TransferServerIdentityProviderDetails <a name="TransferServerIdentityProviderDetails" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerIdentityProviderDetails: transferServer.TransferServerIdentityProviderDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.function">function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#function TransferServer#function}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.invocationRole">invocationRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.sftpAuthenticationMethods">sftpAuthenticationMethods</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#url TransferServer#url}. |

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#function TransferServer#function}.

---

##### `invocationRole`<sup>Optional</sup> <a name="invocationRole" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.invocationRole"></a>

```typescript
public readonly invocationRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}.

---

##### `sftpAuthenticationMethods`<sup>Optional</sup> <a name="sftpAuthenticationMethods" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.sftpAuthenticationMethods"></a>

```typescript
public readonly sftpAuthenticationMethods: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#url TransferServer#url}.

---

### TransferServerProtocolDetails <a name="TransferServerProtocolDetails" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerProtocolDetails: transferServer.TransferServerProtocolDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.as2Transports">as2Transports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#as_2_transports TransferServer#as_2_transports}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.passiveIp">passiveIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.setStatOption">setStatOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.tlsSessionResumptionMode">tlsSessionResumptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}. |

---

##### `as2Transports`<sup>Optional</sup> <a name="as2Transports" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.as2Transports"></a>

```typescript
public readonly as2Transports: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#as_2_transports TransferServer#as_2_transports}.

---

##### `passiveIp`<sup>Optional</sup> <a name="passiveIp" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.passiveIp"></a>

```typescript
public readonly passiveIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}.

---

##### `setStatOption`<sup>Optional</sup> <a name="setStatOption" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.setStatOption"></a>

```typescript
public readonly setStatOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}.

---

##### `tlsSessionResumptionMode`<sup>Optional</sup> <a name="tlsSessionResumptionMode" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.tlsSessionResumptionMode"></a>

```typescript
public readonly tlsSessionResumptionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}.

---

### TransferServerS3StorageOptions <a name="TransferServerS3StorageOptions" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerS3StorageOptions: transferServer.TransferServerS3StorageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions.property.directoryListingOptimization">directoryListingOptimization</a></code> | <code>string</code> | Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility. |

---

##### `directoryListingOptimization`<sup>Optional</sup> <a name="directoryListingOptimization" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions.property.directoryListingOptimization"></a>

```typescript
public readonly directoryListingOptimization: string;
```

- *Type:* string

Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}

---

### TransferServerTags <a name="TransferServerTags" id="@cdktn/provider-awscc.transferServer.TransferServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerTags.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerTags: transferServer.TransferServerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#key TransferServer#key}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#value TransferServer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferServer.TransferServerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#key TransferServer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#value TransferServer#value}.

---

### TransferServerWorkflowDetails <a name="TransferServerWorkflowDetails" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerWorkflowDetails: transferServer.TransferServerWorkflowDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.property.onPartialUpload">onPartialUpload</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.property.onUpload">onUpload</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}. |

---

##### `onPartialUpload`<sup>Optional</sup> <a name="onPartialUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.property.onPartialUpload"></a>

```typescript
public readonly onPartialUpload: IResolvable | TransferServerWorkflowDetailsOnPartialUpload[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}.

---

##### `onUpload`<sup>Optional</sup> <a name="onUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.property.onUpload"></a>

```typescript
public readonly onUpload: IResolvable | TransferServerWorkflowDetailsOnUpload[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}.

---

### TransferServerWorkflowDetailsOnPartialUpload <a name="TransferServerWorkflowDetailsOnPartialUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerWorkflowDetailsOnPartialUpload: transferServer.TransferServerWorkflowDetailsOnPartialUpload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.executionRole">executionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.workflowId">workflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}.

---

##### `workflowId`<sup>Optional</sup> <a name="workflowId" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}.

---

### TransferServerWorkflowDetailsOnUpload <a name="TransferServerWorkflowDetailsOnUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

const transferServerWorkflowDetailsOnUpload: transferServer.TransferServerWorkflowDetailsOnUpload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole">executionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId">workflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}.

---

##### `workflowId`<sup>Optional</sup> <a name="workflowId" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferServerEndpointDetailsOutputReference <a name="TransferServerEndpointDetailsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds">resetAddressAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressAllocationIds` <a name="resetAddressAllocationIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds"></a>

```typescript
public resetAddressAllocationIds(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput">addressAllocationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds">addressAllocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressAllocationIdsInput`<sup>Optional</sup> <a name="addressAllocationIdsInput" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput"></a>

```typescript
public readonly addressAllocationIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `addressAllocationIds`<sup>Required</sup> <a name="addressAllocationIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```typescript
public readonly addressAllocationIds: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerEndpointDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---


### TransferServerIdentityProviderDetailsOutputReference <a name="TransferServerIdentityProviderDetailsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerIdentityProviderDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetInvocationRole">resetInvocationRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetSftpAuthenticationMethods">resetSftpAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetFunction` <a name="resetFunction" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetInvocationRole` <a name="resetInvocationRole" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetInvocationRole"></a>

```typescript
public resetInvocationRole(): void
```

##### `resetSftpAuthenticationMethods` <a name="resetSftpAuthenticationMethods" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetSftpAuthenticationMethods"></a>

```typescript
public resetSftpAuthenticationMethods(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.invocationRoleInput">invocationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethodsInput">sftpAuthenticationMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.invocationRole">invocationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethods">sftpAuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `invocationRoleInput`<sup>Optional</sup> <a name="invocationRoleInput" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.invocationRoleInput"></a>

```typescript
public readonly invocationRoleInput: string;
```

- *Type:* string

---

##### `sftpAuthenticationMethodsInput`<sup>Optional</sup> <a name="sftpAuthenticationMethodsInput" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethodsInput"></a>

```typescript
public readonly sftpAuthenticationMethodsInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `invocationRole`<sup>Required</sup> <a name="invocationRole" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.invocationRole"></a>

```typescript
public readonly invocationRole: string;
```

- *Type:* string

---

##### `sftpAuthenticationMethods`<sup>Required</sup> <a name="sftpAuthenticationMethods" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethods"></a>

```typescript
public readonly sftpAuthenticationMethods: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerIdentityProviderDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a>

---


### TransferServerProtocolDetailsOutputReference <a name="TransferServerProtocolDetailsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerProtocolDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetAs2Transports">resetAs2Transports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetPassiveIp">resetPassiveIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetSetStatOption">resetSetStatOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetTlsSessionResumptionMode">resetTlsSessionResumptionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAs2Transports` <a name="resetAs2Transports" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetAs2Transports"></a>

```typescript
public resetAs2Transports(): void
```

##### `resetPassiveIp` <a name="resetPassiveIp" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetPassiveIp"></a>

```typescript
public resetPassiveIp(): void
```

##### `resetSetStatOption` <a name="resetSetStatOption" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetSetStatOption"></a>

```typescript
public resetSetStatOption(): void
```

##### `resetTlsSessionResumptionMode` <a name="resetTlsSessionResumptionMode" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetTlsSessionResumptionMode"></a>

```typescript
public resetTlsSessionResumptionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.as2TransportsInput">as2TransportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIpInput">passiveIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOptionInput">setStatOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionModeInput">tlsSessionResumptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.as2Transports">as2Transports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIp">passiveIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOption">setStatOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode">tlsSessionResumptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `as2TransportsInput`<sup>Optional</sup> <a name="as2TransportsInput" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.as2TransportsInput"></a>

```typescript
public readonly as2TransportsInput: string[];
```

- *Type:* string[]

---

##### `passiveIpInput`<sup>Optional</sup> <a name="passiveIpInput" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIpInput"></a>

```typescript
public readonly passiveIpInput: string;
```

- *Type:* string

---

##### `setStatOptionInput`<sup>Optional</sup> <a name="setStatOptionInput" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOptionInput"></a>

```typescript
public readonly setStatOptionInput: string;
```

- *Type:* string

---

##### `tlsSessionResumptionModeInput`<sup>Optional</sup> <a name="tlsSessionResumptionModeInput" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionModeInput"></a>

```typescript
public readonly tlsSessionResumptionModeInput: string;
```

- *Type:* string

---

##### `as2Transports`<sup>Required</sup> <a name="as2Transports" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.as2Transports"></a>

```typescript
public readonly as2Transports: string[];
```

- *Type:* string[]

---

##### `passiveIp`<sup>Required</sup> <a name="passiveIp" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIp"></a>

```typescript
public readonly passiveIp: string;
```

- *Type:* string

---

##### `setStatOption`<sup>Required</sup> <a name="setStatOption" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOption"></a>

```typescript
public readonly setStatOption: string;
```

- *Type:* string

---

##### `tlsSessionResumptionMode`<sup>Required</sup> <a name="tlsSessionResumptionMode" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode"></a>

```typescript
public readonly tlsSessionResumptionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerProtocolDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---


### TransferServerS3StorageOptionsOutputReference <a name="TransferServerS3StorageOptionsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerS3StorageOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resetDirectoryListingOptimization">resetDirectoryListingOptimization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryListingOptimization` <a name="resetDirectoryListingOptimization" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resetDirectoryListingOptimization"></a>

```typescript
public resetDirectoryListingOptimization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimizationInput">directoryListingOptimizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization">directoryListingOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryListingOptimizationInput`<sup>Optional</sup> <a name="directoryListingOptimizationInput" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimizationInput"></a>

```typescript
public readonly directoryListingOptimizationInput: string;
```

- *Type:* string

---

##### `directoryListingOptimization`<sup>Required</sup> <a name="directoryListingOptimization" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization"></a>

```typescript
public readonly directoryListingOptimization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerS3StorageOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---


### TransferServerTagsList <a name="TransferServerTagsList" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.get"></a>

```typescript
public get(index: number): TransferServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>[]

---


### TransferServerTagsOutputReference <a name="TransferServerTagsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>

---


### TransferServerWorkflowDetailsOnPartialUploadList <a name="TransferServerWorkflowDetailsOnPartialUploadList" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerWorkflowDetailsOnPartialUploadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.get"></a>

```typescript
public get(index: number): TransferServerWorkflowDetailsOnPartialUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerWorkflowDetailsOnPartialUpload[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>[]

---


### TransferServerWorkflowDetailsOnPartialUploadOutputReference <a name="TransferServerWorkflowDetailsOnPartialUploadOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resetWorkflowId">resetWorkflowId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetWorkflowId` <a name="resetWorkflowId" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resetWorkflowId"></a>

```typescript
public resetWorkflowId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowIdInput">workflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `workflowIdInput`<sup>Optional</sup> <a name="workflowIdInput" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowIdInput"></a>

```typescript
public readonly workflowIdInput: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerWorkflowDetailsOnPartialUpload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

---


### TransferServerWorkflowDetailsOnUploadList <a name="TransferServerWorkflowDetailsOnUploadList" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerWorkflowDetailsOnUploadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.get"></a>

```typescript
public get(index: number): TransferServerWorkflowDetailsOnUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerWorkflowDetailsOnUpload[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>[]

---


### TransferServerWorkflowDetailsOnUploadOutputReference <a name="TransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerWorkflowDetailsOnUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resetWorkflowId">resetWorkflowId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetWorkflowId` <a name="resetWorkflowId" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resetWorkflowId"></a>

```typescript
public resetWorkflowId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput">workflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `workflowIdInput`<sup>Optional</sup> <a name="workflowIdInput" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput"></a>

```typescript
public readonly workflowIdInput: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerWorkflowDetailsOnUpload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---


### TransferServerWorkflowDetailsOutputReference <a name="TransferServerWorkflowDetailsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktn/provider-awscc'

new transferServer.TransferServerWorkflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload">putOnPartialUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload">putOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnPartialUpload">resetOnPartialUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload">resetOnUpload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnPartialUpload` <a name="putOnPartialUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload"></a>

```typescript
public putOnPartialUpload(value: IResolvable | TransferServerWorkflowDetailsOnPartialUpload[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>[]

---

##### `putOnUpload` <a name="putOnUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload"></a>

```typescript
public putOnUpload(value: IResolvable | TransferServerWorkflowDetailsOnUpload[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>[]

---

##### `resetOnPartialUpload` <a name="resetOnPartialUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnPartialUpload"></a>

```typescript
public resetOnPartialUpload(): void
```

##### `resetOnUpload` <a name="resetOnUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload"></a>

```typescript
public resetOnUpload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUpload">onPartialUpload</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList">TransferServerWorkflowDetailsOnPartialUploadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload">onUpload</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList">TransferServerWorkflowDetailsOnUploadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUploadInput">onPartialUploadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput">onUploadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onPartialUpload`<sup>Required</sup> <a name="onPartialUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUpload"></a>

```typescript
public readonly onPartialUpload: TransferServerWorkflowDetailsOnPartialUploadList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList">TransferServerWorkflowDetailsOnPartialUploadList</a>

---

##### `onUpload`<sup>Required</sup> <a name="onUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```typescript
public readonly onUpload: TransferServerWorkflowDetailsOnUploadList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList">TransferServerWorkflowDetailsOnUploadList</a>

---

##### `onPartialUploadInput`<sup>Optional</sup> <a name="onPartialUploadInput" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUploadInput"></a>

```typescript
public readonly onPartialUploadInput: IResolvable | TransferServerWorkflowDetailsOnPartialUpload[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>[]

---

##### `onUploadInput`<sup>Optional</sup> <a name="onUploadInput" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput"></a>

```typescript
public readonly onUploadInput: IResolvable | TransferServerWorkflowDetailsOnUpload[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferServerWorkflowDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---




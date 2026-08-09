# `networkmanagerSiteToSiteVpnAttachment` Submodule <a name="`networkmanagerSiteToSiteVpnAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerSiteToSiteVpnAttachment <a name="NetworkmanagerSiteToSiteVpnAttachment" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment awscc_networkmanager_site_to_site_vpn_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment(scope: Construct, id: string, config: NetworkmanagerSiteToSiteVpnAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig">NetworkmanagerSiteToSiteVpnAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig">NetworkmanagerSiteToSiteVpnAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putProposedNetworkFunctionGroupChange">putProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putProposedSegmentChange">putProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetNetworkFunctionGroupName">resetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetProposedNetworkFunctionGroupChange">resetProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetProposedSegmentChange">resetProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetRoutingPolicyLabel">resetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProposedNetworkFunctionGroupChange` <a name="putProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putProposedNetworkFunctionGroupChange"></a>

```typescript
public putProposedNetworkFunctionGroupChange(value: NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putProposedNetworkFunctionGroupChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `putProposedSegmentChange` <a name="putProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putProposedSegmentChange"></a>

```typescript
public putProposedSegmentChange(value: NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putProposedSegmentChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a>[]

---

##### `resetNetworkFunctionGroupName` <a name="resetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetNetworkFunctionGroupName"></a>

```typescript
public resetNetworkFunctionGroupName(): void
```

##### `resetProposedNetworkFunctionGroupChange` <a name="resetProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetProposedNetworkFunctionGroupChange"></a>

```typescript
public resetProposedNetworkFunctionGroupChange(): void
```

##### `resetProposedSegmentChange` <a name="resetProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetProposedSegmentChange"></a>

```typescript
public resetProposedSegmentChange(): void
```

##### `resetRoutingPolicyLabel` <a name="resetRoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetRoutingPolicyLabel"></a>

```typescript
public resetRoutingPolicyLabel(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerSiteToSiteVpnAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerSiteToSiteVpnAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerSiteToSiteVpnAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lastModificationErrors">lastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList">NetworkmanagerSiteToSiteVpnAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupNameInput">networkFunctionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChangeInput">proposedNetworkFunctionGroupChangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChangeInput">proposedSegmentChangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabelInput">routingPolicyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArnInput">vpnConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn">vpnConnectionArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lastModificationErrors"></a>

```typescript
public readonly lastModificationErrors: string[];
```

- *Type:* string[]

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `proposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChange"></a>

```typescript
public readonly proposedNetworkFunctionGroupChange: NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposedSegmentChange`<sup>Required</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChange"></a>

```typescript
public readonly proposedSegmentChange: NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerSiteToSiteVpnAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList">NetworkmanagerSiteToSiteVpnAttachmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkIdInput"></a>

```typescript
public readonly coreNetworkIdInput: string;
```

- *Type:* string

---

##### `networkFunctionGroupNameInput`<sup>Optional</sup> <a name="networkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupNameInput"></a>

```typescript
public readonly networkFunctionGroupNameInput: string;
```

- *Type:* string

---

##### `proposedNetworkFunctionGroupChangeInput`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChangeInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```typescript
public readonly proposedNetworkFunctionGroupChangeInput: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `proposedSegmentChangeInput`<sup>Optional</sup> <a name="proposedSegmentChangeInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChangeInput"></a>

```typescript
public readonly proposedSegmentChangeInput: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a>

---

##### `routingPolicyLabelInput`<sup>Optional</sup> <a name="routingPolicyLabelInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabelInput"></a>

```typescript
public readonly routingPolicyLabelInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a>[]

---

##### `vpnConnectionArnInput`<sup>Optional</sup> <a name="vpnConnectionArnInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArnInput"></a>

```typescript
public readonly vpnConnectionArnInput: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

---

##### `vpnConnectionArn`<sup>Required</sup> <a name="vpnConnectionArn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn"></a>

```typescript
public readonly vpnConnectionArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerSiteToSiteVpnAttachmentConfig <a name="NetworkmanagerSiteToSiteVpnAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

const networkmanagerSiteToSiteVpnAttachmentConfig: networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | The ID of a core network where you're creating a site-to-site VPN attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.vpnConnectionArn">vpnConnectionArn</a></code> | <code>string</code> | The ARN of the site-to-site VPN attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | The name of the network function group attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a>[]</code> | Tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

The ID of a core network where you're creating a site-to-site VPN attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}

---

##### `vpnConnectionArn`<sup>Required</sup> <a name="vpnConnectionArn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.vpnConnectionArn"></a>

```typescript
public readonly vpnConnectionArn: string;
```

- *Type:* string

The ARN of the site-to-site VPN attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}

---

##### `networkFunctionGroupName`<sup>Optional</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

The name of the network function group attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#network_function_group_name NetworkmanagerSiteToSiteVpnAttachment#network_function_group_name}

---

##### `proposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```typescript
public readonly proposedNetworkFunctionGroupChange: NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#proposed_network_function_group_change NetworkmanagerSiteToSiteVpnAttachment#proposed_network_function_group_change}

---

##### `proposedSegmentChange`<sup>Optional</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.proposedSegmentChange"></a>

```typescript
public readonly proposedSegmentChange: NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#proposed_segment_change NetworkmanagerSiteToSiteVpnAttachment#proposed_segment_change}

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#routing_policy_label NetworkmanagerSiteToSiteVpnAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a>[]

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}

---

### NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

const networkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange: networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | The key-value tags that changed for the network function group. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#attachment_policy_rule_number NetworkmanagerSiteToSiteVpnAttachment#attachment_policy_rule_number}

---

##### `networkFunctionGroupName`<sup>Optional</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#network_function_group_name NetworkmanagerSiteToSiteVpnAttachment#network_function_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}

---

### NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

const networkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags: networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#key NetworkmanagerSiteToSiteVpnAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#value NetworkmanagerSiteToSiteVpnAttachment#value}

---

### NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

const networkmanagerSiteToSiteVpnAttachmentProposedSegmentChange: networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.property.segmentName">segmentName</a></code> | <code>string</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>[]</code> | The key-value tags that changed for the segment. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#attachment_policy_rule_number NetworkmanagerSiteToSiteVpnAttachment#attachment_policy_rule_number}

---

##### `segmentName`<sup>Optional</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#segment_name NetworkmanagerSiteToSiteVpnAttachment#segment_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>[]

The key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}

---

### NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

const networkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags: networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#key NetworkmanagerSiteToSiteVpnAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#value NetworkmanagerSiteToSiteVpnAttachment#value}

---

### NetworkmanagerSiteToSiteVpnAttachmentTags <a name="NetworkmanagerSiteToSiteVpnAttachmentTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

const networkmanagerSiteToSiteVpnAttachmentTags: networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#key NetworkmanagerSiteToSiteVpnAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site_to_site_vpn_attachment#value NetworkmanagerSiteToSiteVpnAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">resetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```typescript
public resetAttachmentPolicyRuleNumber(): void
```

##### `resetNetworkFunctionGroupName` <a name="resetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```typescript
public resetNetworkFunctionGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">networkFunctionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```typescript
public readonly attachmentPolicyRuleNumberInput: number;
```

- *Type:* number

---

##### `networkFunctionGroupNameInput`<sup>Optional</sup> <a name="networkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```typescript
public readonly networkFunctionGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a>

---


### NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---


### NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resetSegmentName">resetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>[]

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```typescript
public resetAttachmentPolicyRuleNumber(): void
```

##### `resetSegmentName` <a name="resetSegmentName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```typescript
public resetSegmentName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">segmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```typescript
public readonly attachmentPolicyRuleNumberInput: number;
```

- *Type:* number

---

##### `segmentNameInput`<sup>Optional</sup> <a name="segmentNameInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```typescript
public readonly segmentNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>[]

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a>

---


### NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>[]

---


### NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>

---


### NetworkmanagerSiteToSiteVpnAttachmentTagsList <a name="NetworkmanagerSiteToSiteVpnAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a>[]

---


### NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference <a name="NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-awscc'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTags">NetworkmanagerSiteToSiteVpnAttachmentTags</a>

---




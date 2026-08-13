# `networkmanagerConnectAttachment` Submodule <a name="`networkmanagerConnectAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerConnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnectAttachment <a name="NetworkmanagerConnectAttachment" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment awscc_networkmanager_connect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachment(scope: Construct, id: string, config: NetworkmanagerConnectAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig">NetworkmanagerConnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig">NetworkmanagerConnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange">putProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange">putProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetNetworkFunctionGroupName">resetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedNetworkFunctionGroupChange">resetProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedSegmentChange">resetProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetRoutingPolicyLabel">resetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions"></a>

```typescript
public putOptions(value: NetworkmanagerConnectAttachmentOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---

##### `putProposedNetworkFunctionGroupChange` <a name="putProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange"></a>

```typescript
public putProposedNetworkFunctionGroupChange(value: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `putProposedSegmentChange` <a name="putProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange"></a>

```typescript
public putProposedSegmentChange(value: NetworkmanagerConnectAttachmentProposedSegmentChange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerConnectAttachmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>[]

---

##### `resetNetworkFunctionGroupName` <a name="resetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetNetworkFunctionGroupName"></a>

```typescript
public resetNetworkFunctionGroupName(): void
```

##### `resetProposedNetworkFunctionGroupChange` <a name="resetProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedNetworkFunctionGroupChange"></a>

```typescript
public resetProposedNetworkFunctionGroupChange(): void
```

##### `resetProposedSegmentChange` <a name="resetProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedSegmentChange"></a>

```typescript
public resetProposedSegmentChange(): void
```

##### `resetRoutingPolicyLabel` <a name="resetRoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetRoutingPolicyLabel"></a>

```typescript
public resetRoutingPolicyLabel(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerConnectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerConnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerConnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lastModificationErrors">lastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference">NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList">NetworkmanagerConnectAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput">edgeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupNameInput">networkFunctionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput">optionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChangeInput">proposedNetworkFunctionGroupChangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChangeInput">proposedSegmentChangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabelInput">routingPolicyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput">transportAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId">transportAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lastModificationErrors"></a>

```typescript
public readonly lastModificationErrors: string[];
```

- *Type:* string[]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options"></a>

```typescript
public readonly options: NetworkmanagerConnectAttachmentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a>

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `proposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChange"></a>

```typescript
public readonly proposedNetworkFunctionGroupChange: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposedSegmentChange`<sup>Required</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChange"></a>

```typescript
public readonly proposedSegmentChange: NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference">NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerConnectAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList">NetworkmanagerConnectAttachmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput"></a>

```typescript
public readonly coreNetworkIdInput: string;
```

- *Type:* string

---

##### `edgeLocationInput`<sup>Optional</sup> <a name="edgeLocationInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput"></a>

```typescript
public readonly edgeLocationInput: string;
```

- *Type:* string

---

##### `networkFunctionGroupNameInput`<sup>Optional</sup> <a name="networkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupNameInput"></a>

```typescript
public readonly networkFunctionGroupNameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | NetworkmanagerConnectAttachmentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---

##### `proposedNetworkFunctionGroupChangeInput`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChangeInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```typescript
public readonly proposedNetworkFunctionGroupChangeInput: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `proposedSegmentChangeInput`<sup>Optional</sup> <a name="proposedSegmentChangeInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChangeInput"></a>

```typescript
public readonly proposedSegmentChangeInput: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

---

##### `routingPolicyLabelInput`<sup>Optional</sup> <a name="routingPolicyLabelInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabelInput"></a>

```typescript
public readonly routingPolicyLabelInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerConnectAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>[]

---

##### `transportAttachmentIdInput`<sup>Optional</sup> <a name="transportAttachmentIdInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput"></a>

```typescript
public readonly transportAttachmentIdInput: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

---

##### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId"></a>

```typescript
public readonly transportAttachmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectAttachmentConfig <a name="NetworkmanagerConnectAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

const networkmanagerConnectAttachmentConfig: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | ID of the CoreNetwork that the attachment will be attached to. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | Edge location of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | Protocol options for connect attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId">transportAttachmentId</a></code> | <code>string</code> | Id of transport attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | The name of the network function group attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>[]</code> | Tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

ID of the CoreNetwork that the attachment will be attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

Edge location of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options"></a>

```typescript
public readonly options: NetworkmanagerConnectAttachmentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

Protocol options for connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#options NetworkmanagerConnectAttachment#options}

---

##### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId"></a>

```typescript
public readonly transportAttachmentId: string;
```

- *Type:* string

Id of transport attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}

---

##### `networkFunctionGroupName`<sup>Optional</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

The name of the network function group attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}

---

##### `proposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```typescript
public readonly proposedNetworkFunctionGroupChange: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#proposed_network_function_group_change NetworkmanagerConnectAttachment#proposed_network_function_group_change}

---

##### `proposedSegmentChange`<sup>Optional</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedSegmentChange"></a>

```typescript
public readonly proposedSegmentChange: NetworkmanagerConnectAttachmentProposedSegmentChange;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#proposed_segment_change NetworkmanagerConnectAttachment#proposed_segment_change}

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#routing_policy_label NetworkmanagerConnectAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerConnectAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>[]

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentOptions <a name="NetworkmanagerConnectAttachmentOptions" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

const networkmanagerConnectAttachmentOptions: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol">protocol</a></code> | <code>string</code> | Tunnel protocol for connect attachment. |

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Tunnel protocol for connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}

---

### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

const networkmanagerConnectAttachmentProposedNetworkFunctionGroupChange: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | The key-value tags that changed for the network function group. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}

---

##### `networkFunctionGroupName`<sup>Optional</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

const networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

### NetworkmanagerConnectAttachmentProposedSegmentChange <a name="NetworkmanagerConnectAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

const networkmanagerConnectAttachmentProposedSegmentChange: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.segmentName">segmentName</a></code> | <code>string</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>[]</code> | The list of key-value tags that changed for the segment. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}

---

##### `segmentName`<sup>Optional</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#segment_name NetworkmanagerConnectAttachment#segment_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>[]

The list of key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentProposedSegmentChangeTags <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

const networkmanagerConnectAttachmentProposedSegmentChangeTags: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

### NetworkmanagerConnectAttachmentTags <a name="NetworkmanagerConnectAttachmentTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

const networkmanagerConnectAttachmentTags: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectAttachmentOptionsOutputReference <a name="NetworkmanagerConnectAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">resetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```typescript
public resetAttachmentPolicyRuleNumber(): void
```

##### `resetNetworkFunctionGroupName` <a name="resetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```typescript
public resetNetworkFunctionGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">networkFunctionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```typescript
public readonly attachmentPolicyRuleNumberInput: number;
```

- *Type:* number

---

##### `networkFunctionGroupNameInput`<sup>Optional</sup> <a name="networkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```typescript
public readonly networkFunctionGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetSegmentName">resetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChangeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>[]

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```typescript
public resetAttachmentPolicyRuleNumber(): void
```

##### `resetSegmentName` <a name="resetSegmentName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```typescript
public resetSegmentName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList">NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">segmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList">NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```typescript
public readonly attachmentPolicyRuleNumberInput: number;
```

- *Type:* number

---

##### `segmentNameInput`<sup>Optional</sup> <a name="segmentNameInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```typescript
public readonly segmentNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>[]

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>[]

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChangeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>

---


### NetworkmanagerConnectAttachmentTagsList <a name="NetworkmanagerConnectAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerConnectAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>[]

---


### NetworkmanagerConnectAttachmentTagsOutputReference <a name="NetworkmanagerConnectAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktn/provider-awscc'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectAttachmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>

---




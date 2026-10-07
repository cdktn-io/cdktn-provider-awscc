# `smsvoiceRcsAgent` Submodule <a name="`smsvoiceRcsAgent` Submodule" id="@cdktn/provider-awscc.smsvoiceRcsAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceRcsAgent <a name="SmsvoiceRcsAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

new smsvoiceRcsAgent.SmsvoiceRcsAgent(scope: Construct, id: string, config?: SmsvoiceRcsAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig">SmsvoiceRcsAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig">SmsvoiceRcsAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName">resetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled">resetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn">resetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole">resetTwoWayChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled">resetTwoWayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName">resetTwoWayMediaS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix">resetTwoWayMediaS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role">resetTwoWayMediaS3Role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled">resetTwoWayRcsEventsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags"></a>

```typescript
public putTags(value: IResolvable | SmsvoiceRcsAgentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetOptOutListName` <a name="resetOptOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName"></a>

```typescript
public resetOptOutListName(): void
```

##### `resetSelfManagedOptOutsEnabled` <a name="resetSelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled"></a>

```typescript
public resetSelfManagedOptOutsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTwoWayChannelArn` <a name="resetTwoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn"></a>

```typescript
public resetTwoWayChannelArn(): void
```

##### `resetTwoWayChannelRole` <a name="resetTwoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole"></a>

```typescript
public resetTwoWayChannelRole(): void
```

##### `resetTwoWayEnabled` <a name="resetTwoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled"></a>

```typescript
public resetTwoWayEnabled(): void
```

##### `resetTwoWayMediaS3BucketName` <a name="resetTwoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName"></a>

```typescript
public resetTwoWayMediaS3BucketName(): void
```

##### `resetTwoWayMediaS3KeyPrefix` <a name="resetTwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix"></a>

```typescript
public resetTwoWayMediaS3KeyPrefix(): void
```

##### `resetTwoWayMediaS3Role` <a name="resetTwoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role"></a>

```typescript
public resetTwoWayMediaS3Role(): void
```

##### `resetTwoWayRcsEventsEnabled` <a name="resetTwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled"></a>

```typescript
public resetTwoWayRcsEventsEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceRcsAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceRcsAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceRcsAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn">rcsAgentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId">rcsAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent">testingAgent</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput">optOutListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput">selfManagedOptOutsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput">twoWayChannelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput">twoWayChannelRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput">twoWayEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput">twoWayMediaS3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput">twoWayMediaS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput">twoWayMediaS3RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput">twoWayRcsEventsEnabledInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName">optOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled">twoWayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName">twoWayMediaS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix">twoWayMediaS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role">twoWayMediaS3Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled">twoWayRcsEventsEnabled</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `rcsAgentArn`<sup>Required</sup> <a name="rcsAgentArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn"></a>

```typescript
public readonly rcsAgentArn: string;
```

- *Type:* string

---

##### `rcsAgentId`<sup>Required</sup> <a name="rcsAgentId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId"></a>

```typescript
public readonly rcsAgentId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags"></a>

```typescript
public readonly tags: SmsvoiceRcsAgentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a>

---

##### `testingAgent`<sup>Required</sup> <a name="testingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent"></a>

```typescript
public readonly testingAgent: SmsvoiceRcsAgentTestingAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `optOutListNameInput`<sup>Optional</sup> <a name="optOutListNameInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput"></a>

```typescript
public readonly optOutListNameInput: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="selfManagedOptOutsEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput"></a>

```typescript
public readonly selfManagedOptOutsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SmsvoiceRcsAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]

---

##### `twoWayChannelArnInput`<sup>Optional</sup> <a name="twoWayChannelArnInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput"></a>

```typescript
public readonly twoWayChannelArnInput: string;
```

- *Type:* string

---

##### `twoWayChannelRoleInput`<sup>Optional</sup> <a name="twoWayChannelRoleInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput"></a>

```typescript
public readonly twoWayChannelRoleInput: string;
```

- *Type:* string

---

##### `twoWayEnabledInput`<sup>Optional</sup> <a name="twoWayEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput"></a>

```typescript
public readonly twoWayEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `twoWayMediaS3BucketNameInput`<sup>Optional</sup> <a name="twoWayMediaS3BucketNameInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput"></a>

```typescript
public readonly twoWayMediaS3BucketNameInput: string;
```

- *Type:* string

---

##### `twoWayMediaS3KeyPrefixInput`<sup>Optional</sup> <a name="twoWayMediaS3KeyPrefixInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput"></a>

```typescript
public readonly twoWayMediaS3KeyPrefixInput: string;
```

- *Type:* string

---

##### `twoWayMediaS3RoleInput`<sup>Optional</sup> <a name="twoWayMediaS3RoleInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput"></a>

```typescript
public readonly twoWayMediaS3RoleInput: string;
```

- *Type:* string

---

##### `twoWayRcsEventsEnabledInput`<sup>Optional</sup> <a name="twoWayRcsEventsEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput"></a>

```typescript
public readonly twoWayRcsEventsEnabledInput: string[];
```

- *Type:* string[]

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `twoWayChannelArn`<sup>Required</sup> <a name="twoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn"></a>

```typescript
public readonly twoWayChannelArn: string;
```

- *Type:* string

---

##### `twoWayChannelRole`<sup>Required</sup> <a name="twoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole"></a>

```typescript
public readonly twoWayChannelRole: string;
```

- *Type:* string

---

##### `twoWayEnabled`<sup>Required</sup> <a name="twoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled"></a>

```typescript
public readonly twoWayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `twoWayMediaS3BucketName`<sup>Required</sup> <a name="twoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName"></a>

```typescript
public readonly twoWayMediaS3BucketName: string;
```

- *Type:* string

---

##### `twoWayMediaS3KeyPrefix`<sup>Required</sup> <a name="twoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix"></a>

```typescript
public readonly twoWayMediaS3KeyPrefix: string;
```

- *Type:* string

---

##### `twoWayMediaS3Role`<sup>Required</sup> <a name="twoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role"></a>

```typescript
public readonly twoWayMediaS3Role: string;
```

- *Type:* string

---

##### `twoWayRcsEventsEnabled`<sup>Required</sup> <a name="twoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled"></a>

```typescript
public readonly twoWayRcsEventsEnabled: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceRcsAgentConfig <a name="SmsvoiceRcsAgentConfig" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.Initializer"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

const smsvoiceRcsAgentConfig: smsvoiceRcsAgent.SmsvoiceRcsAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true the RCS agent can't be deleted. By default this is false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName">optOutListName</a></code> | <code>string</code> | The name of the opt-out list associated with the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]</code> | An array of key-value pairs to apply to the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled">twoWayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true two-way messaging is enabled for the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName">twoWayMediaS3BucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket where inbound RCS media objects are written. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix">twoWayMediaS3KeyPrefix</a></code> | <code>string</code> | The key prefix used for inbound RCS media objects in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role">twoWayMediaS3Role</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled">twoWayRcsEventsEnabled</a></code> | <code>string[]</code> | The list of RCS event types enabled for two-way messaging. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true the RCS agent can't be deleted. By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#deletion_protection_enabled SmsvoiceRcsAgent#deletion_protection_enabled}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

The name of the opt-out list associated with the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#opt_out_list_name SmsvoiceRcsAgent#opt_out_list_name}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests.

By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#self_managed_opt_outs_enabled SmsvoiceRcsAgent#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SmsvoiceRcsAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]

An array of key-value pairs to apply to the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#tags SmsvoiceRcsAgent#tags}

---

##### `twoWayChannelArn`<sup>Optional</sup> <a name="twoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn"></a>

```typescript
public readonly twoWayChannelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_arn SmsvoiceRcsAgent#two_way_channel_arn}

---

##### `twoWayChannelRole`<sup>Optional</sup> <a name="twoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole"></a>

```typescript
public readonly twoWayChannelRole: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_role SmsvoiceRcsAgent#two_way_channel_role}

---

##### `twoWayEnabled`<sup>Optional</sup> <a name="twoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled"></a>

```typescript
public readonly twoWayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true two-way messaging is enabled for the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_enabled SmsvoiceRcsAgent#two_way_enabled}

---

##### `twoWayMediaS3BucketName`<sup>Optional</sup> <a name="twoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName"></a>

```typescript
public readonly twoWayMediaS3BucketName: string;
```

- *Type:* string

The name of the Amazon S3 bucket where inbound RCS media objects are written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_bucket_name SmsvoiceRcsAgent#two_way_media_s3_bucket_name}

---

##### `twoWayMediaS3KeyPrefix`<sup>Optional</sup> <a name="twoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix"></a>

```typescript
public readonly twoWayMediaS3KeyPrefix: string;
```

- *Type:* string

The key prefix used for inbound RCS media objects in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_key_prefix SmsvoiceRcsAgent#two_way_media_s3_key_prefix}

---

##### `twoWayMediaS3Role`<sup>Optional</sup> <a name="twoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role"></a>

```typescript
public readonly twoWayMediaS3Role: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket.

The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_role SmsvoiceRcsAgent#two_way_media_s3_role}

---

##### `twoWayRcsEventsEnabled`<sup>Optional</sup> <a name="twoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled"></a>

```typescript
public readonly twoWayRcsEventsEnabled: string[];
```

- *Type:* string[]

The list of RCS event types enabled for two-way messaging.

An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_rcs_events_enabled SmsvoiceRcsAgent#two_way_rcs_events_enabled}

---

### SmsvoiceRcsAgentTags <a name="SmsvoiceRcsAgentTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.Initializer"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

const smsvoiceRcsAgentTags: smsvoiceRcsAgent.SmsvoiceRcsAgentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#key SmsvoiceRcsAgent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#value SmsvoiceRcsAgent#value}

---

### SmsvoiceRcsAgentTestingAgent <a name="SmsvoiceRcsAgentTestingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent.Initializer"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

const smsvoiceRcsAgentTestingAgent: smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceRcsAgentTagsList <a name="SmsvoiceRcsAgentTagsList" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

new smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get"></a>

```typescript
public get(index: number): SmsvoiceRcsAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceRcsAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]

---


### SmsvoiceRcsAgentTagsOutputReference <a name="SmsvoiceRcsAgentTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

new smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceRcsAgentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>

---


### SmsvoiceRcsAgentTestingAgentOutputReference <a name="SmsvoiceRcsAgentTestingAgentOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer"></a>

```typescript
import { smsvoiceRcsAgent } from '@cdktn/provider-awscc'

new smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId">registrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId">testingAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus">testingAgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registrationId`<sup>Required</sup> <a name="registrationId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId"></a>

```typescript
public readonly registrationId: string;
```

- *Type:* string

---

##### `testingAgentId`<sup>Required</sup> <a name="testingAgentId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId"></a>

```typescript
public readonly testingAgentId: string;
```

- *Type:* string

---

##### `testingAgentStatus`<sup>Required</sup> <a name="testingAgentStatus" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus"></a>

```typescript
public readonly testingAgentStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SmsvoiceRcsAgentTestingAgent;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a>

---




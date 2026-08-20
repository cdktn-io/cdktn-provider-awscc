# `cleanroomsCollaboration` Submodule <a name="`cleanroomsCollaboration` Submodule" id="@cdktn/provider-awscc.cleanroomsCollaboration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsCollaboration <a name="CleanroomsCollaboration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration awscc_cleanrooms_collaboration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaboration(scope: Construct, id: string, config: CleanroomsCollaborationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig">CleanroomsCollaborationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig">CleanroomsCollaborationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities">putCreatorMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration">putCreatorPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata">putDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers">putMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAllowedResultRegions">resetAllowedResultRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAnalyticsEngine">resetAnalyticsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAutoApprovedChangeTypes">resetAutoApprovedChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMemberAbilities">resetCreatorMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMlMemberAbilities">resetCreatorMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorPaymentConfiguration">resetCreatorPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata">resetDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetIsMetricsEnabled">resetIsMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetJobLogStatus">resetJobLogStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCreatorMlMemberAbilities` <a name="putCreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities"></a>

```typescript
public putCreatorMlMemberAbilities(value: CleanroomsCollaborationCreatorMlMemberAbilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

---

##### `putCreatorPaymentConfiguration` <a name="putCreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration"></a>

```typescript
public putCreatorPaymentConfiguration(value: CleanroomsCollaborationCreatorPaymentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

---

##### `putDataEncryptionMetadata` <a name="putDataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata"></a>

```typescript
public putDataEncryptionMetadata(value: CleanroomsCollaborationDataEncryptionMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `putMembers` <a name="putMembers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers"></a>

```typescript
public putMembers(value: IResolvable | CleanroomsCollaborationMembers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags"></a>

```typescript
public putTags(value: IResolvable | CleanroomsCollaborationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>[]

---

##### `resetAllowedResultRegions` <a name="resetAllowedResultRegions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAllowedResultRegions"></a>

```typescript
public resetAllowedResultRegions(): void
```

##### `resetAnalyticsEngine` <a name="resetAnalyticsEngine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAnalyticsEngine"></a>

```typescript
public resetAnalyticsEngine(): void
```

##### `resetAutoApprovedChangeTypes` <a name="resetAutoApprovedChangeTypes" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAutoApprovedChangeTypes"></a>

```typescript
public resetAutoApprovedChangeTypes(): void
```

##### `resetCreatorMemberAbilities` <a name="resetCreatorMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMemberAbilities"></a>

```typescript
public resetCreatorMemberAbilities(): void
```

##### `resetCreatorMlMemberAbilities` <a name="resetCreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMlMemberAbilities"></a>

```typescript
public resetCreatorMlMemberAbilities(): void
```

##### `resetCreatorPaymentConfiguration` <a name="resetCreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorPaymentConfiguration"></a>

```typescript
public resetCreatorPaymentConfiguration(): void
```

##### `resetDataEncryptionMetadata` <a name="resetDataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata"></a>

```typescript
public resetDataEncryptionMetadata(): void
```

##### `resetIsMetricsEnabled` <a name="resetIsMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetIsMetricsEnabled"></a>

```typescript
public resetIsMetricsEnabled(): void
```

##### `resetJobLogStatus` <a name="resetJobLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetJobLogStatus"></a>

```typescript
public resetJobLogStatus(): void
```

##### `resetMembers` <a name="resetMembers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetMembers"></a>

```typescript
public resetMembers(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsCollaboration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

cleanroomsCollaboration.CleanroomsCollaboration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CleanroomsCollaboration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsCollaboration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsCollaboration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsCollaboration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilities">creatorMlMemberAbilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference">CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfiguration">creatorPaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata">dataEncryptionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.members">members</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList">CleanroomsCollaborationMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList">CleanroomsCollaborationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegionsInput">allowedResultRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngineInput">analyticsEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypesInput">autoApprovedChangeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput">creatorDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput">creatorMemberAbilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilitiesInput">creatorMlMemberAbilitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfigurationInput">creatorPaymentConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput">dataEncryptionMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabledInput">isMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatusInput">jobLogStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.membersInput">membersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput">queryLogStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegions">allowedResultRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngine">analyticsEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypes">autoApprovedChangeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName">creatorDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities">creatorMemberAbilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabled">isMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatus">jobLogStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus">queryLogStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.collaborationIdentifier"></a>

```typescript
public readonly collaborationIdentifier: string;
```

- *Type:* string

---

##### `creatorMlMemberAbilities`<sup>Required</sup> <a name="creatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilities"></a>

```typescript
public readonly creatorMlMemberAbilities: CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference">CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference</a>

---

##### `creatorPaymentConfiguration`<sup>Required</sup> <a name="creatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfiguration"></a>

```typescript
public readonly creatorPaymentConfiguration: CleanroomsCollaborationCreatorPaymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationOutputReference</a>

---

##### `dataEncryptionMetadata`<sup>Required</sup> <a name="dataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata"></a>

```typescript
public readonly dataEncryptionMetadata: CleanroomsCollaborationDataEncryptionMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.members"></a>

```typescript
public readonly members: CleanroomsCollaborationMembersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList">CleanroomsCollaborationMembersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tags"></a>

```typescript
public readonly tags: CleanroomsCollaborationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList">CleanroomsCollaborationTagsList</a>

---

##### `allowedResultRegionsInput`<sup>Optional</sup> <a name="allowedResultRegionsInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegionsInput"></a>

```typescript
public readonly allowedResultRegionsInput: string[];
```

- *Type:* string[]

---

##### `analyticsEngineInput`<sup>Optional</sup> <a name="analyticsEngineInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngineInput"></a>

```typescript
public readonly analyticsEngineInput: string;
```

- *Type:* string

---

##### `autoApprovedChangeTypesInput`<sup>Optional</sup> <a name="autoApprovedChangeTypesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypesInput"></a>

```typescript
public readonly autoApprovedChangeTypesInput: string[];
```

- *Type:* string[]

---

##### `creatorDisplayNameInput`<sup>Optional</sup> <a name="creatorDisplayNameInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput"></a>

```typescript
public readonly creatorDisplayNameInput: string;
```

- *Type:* string

---

##### `creatorMemberAbilitiesInput`<sup>Optional</sup> <a name="creatorMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput"></a>

```typescript
public readonly creatorMemberAbilitiesInput: string[];
```

- *Type:* string[]

---

##### `creatorMlMemberAbilitiesInput`<sup>Optional</sup> <a name="creatorMlMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilitiesInput"></a>

```typescript
public readonly creatorMlMemberAbilitiesInput: IResolvable | CleanroomsCollaborationCreatorMlMemberAbilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

---

##### `creatorPaymentConfigurationInput`<sup>Optional</sup> <a name="creatorPaymentConfigurationInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfigurationInput"></a>

```typescript
public readonly creatorPaymentConfigurationInput: IResolvable | CleanroomsCollaborationCreatorPaymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

---

##### `dataEncryptionMetadataInput`<sup>Optional</sup> <a name="dataEncryptionMetadataInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput"></a>

```typescript
public readonly dataEncryptionMetadataInput: IResolvable | CleanroomsCollaborationDataEncryptionMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isMetricsEnabledInput`<sup>Optional</sup> <a name="isMetricsEnabledInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabledInput"></a>

```typescript
public readonly isMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jobLogStatusInput`<sup>Optional</sup> <a name="jobLogStatusInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatusInput"></a>

```typescript
public readonly jobLogStatusInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.membersInput"></a>

```typescript
public readonly membersInput: IResolvable | CleanroomsCollaborationMembers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryLogStatusInput`<sup>Optional</sup> <a name="queryLogStatusInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput"></a>

```typescript
public readonly queryLogStatusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CleanroomsCollaborationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>[]

---

##### `allowedResultRegions`<sup>Required</sup> <a name="allowedResultRegions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegions"></a>

```typescript
public readonly allowedResultRegions: string[];
```

- *Type:* string[]

---

##### `analyticsEngine`<sup>Required</sup> <a name="analyticsEngine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngine"></a>

```typescript
public readonly analyticsEngine: string;
```

- *Type:* string

---

##### `autoApprovedChangeTypes`<sup>Required</sup> <a name="autoApprovedChangeTypes" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypes"></a>

```typescript
public readonly autoApprovedChangeTypes: string[];
```

- *Type:* string[]

---

##### `creatorDisplayName`<sup>Required</sup> <a name="creatorDisplayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName"></a>

```typescript
public readonly creatorDisplayName: string;
```

- *Type:* string

---

##### `creatorMemberAbilities`<sup>Required</sup> <a name="creatorMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities"></a>

```typescript
public readonly creatorMemberAbilities: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isMetricsEnabled`<sup>Required</sup> <a name="isMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabled"></a>

```typescript
public readonly isMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jobLogStatus`<sup>Required</sup> <a name="jobLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatus"></a>

```typescript
public readonly jobLogStatus: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus"></a>

```typescript
public readonly queryLogStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsCollaborationConfig <a name="CleanroomsCollaborationConfig" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationConfig: cleanroomsCollaboration.CleanroomsCollaborationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName">creatorDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus">queryLogStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.allowedResultRegions">allowedResultRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.analyticsEngine">analyticsEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.autoApprovedChangeTypes">autoApprovedChangeTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities">creatorMemberAbilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMlMemberAbilities">creatorMlMemberAbilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorPaymentConfiguration">creatorPaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata">dataEncryptionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.isMetricsEnabled">isMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.jobLogStatus">jobLogStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.members">members</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creatorDisplayName`<sup>Required</sup> <a name="creatorDisplayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName"></a>

```typescript
public readonly creatorDisplayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus"></a>

```typescript
public readonly queryLogStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `allowedResultRegions`<sup>Optional</sup> <a name="allowedResultRegions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.allowedResultRegions"></a>

```typescript
public readonly allowedResultRegions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}.

---

##### `analyticsEngine`<sup>Optional</sup> <a name="analyticsEngine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.analyticsEngine"></a>

```typescript
public readonly analyticsEngine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}.

---

##### `autoApprovedChangeTypes`<sup>Optional</sup> <a name="autoApprovedChangeTypes" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.autoApprovedChangeTypes"></a>

```typescript
public readonly autoApprovedChangeTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}.

---

##### `creatorMemberAbilities`<sup>Optional</sup> <a name="creatorMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities"></a>

```typescript
public readonly creatorMemberAbilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `creatorMlMemberAbilities`<sup>Optional</sup> <a name="creatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMlMemberAbilities"></a>

```typescript
public readonly creatorMlMemberAbilities: CleanroomsCollaborationCreatorMlMemberAbilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}.

---

##### `creatorPaymentConfiguration`<sup>Optional</sup> <a name="creatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorPaymentConfiguration"></a>

```typescript
public readonly creatorPaymentConfiguration: CleanroomsCollaborationCreatorPaymentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}.

---

##### `dataEncryptionMetadata`<sup>Optional</sup> <a name="dataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata"></a>

```typescript
public readonly dataEncryptionMetadata: CleanroomsCollaborationDataEncryptionMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}.

---

##### `isMetricsEnabled`<sup>Optional</sup> <a name="isMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.isMetricsEnabled"></a>

```typescript
public readonly isMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}.

---

##### `jobLogStatus`<sup>Optional</sup> <a name="jobLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.jobLogStatus"></a>

```typescript
public readonly jobLogStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.members"></a>

```typescript
public readonly members: IResolvable | CleanroomsCollaborationMembers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CleanroomsCollaborationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}

---

### CleanroomsCollaborationCreatorMlMemberAbilities <a name="CleanroomsCollaborationCreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationCreatorMlMemberAbilities: cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.property.customMlMemberAbilities">customMlMemberAbilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}. |

---

##### `customMlMemberAbilities`<sup>Optional</sup> <a name="customMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.property.customMlMemberAbilities"></a>

```typescript
public readonly customMlMemberAbilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}.

---

### CleanroomsCollaborationCreatorPaymentConfiguration <a name="CleanroomsCollaborationCreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationCreatorPaymentConfiguration: cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.jobCompute">jobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.queryCompute">queryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}. |

---

##### `jobCompute`<sup>Optional</sup> <a name="jobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.jobCompute"></a>

```typescript
public readonly jobCompute: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}.

---

##### `machineLearning`<sup>Optional</sup> <a name="machineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.machineLearning"></a>

```typescript
public readonly machineLearning: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}.

---

##### `queryCompute`<sup>Optional</sup> <a name="queryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.queryCompute"></a>

```typescript
public readonly queryCompute: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationJobCompute <a name="CleanroomsCollaborationCreatorPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationCreatorPaymentConfigurationJobCompute: cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationCreatorPaymentConfigurationMachineLearning: cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelInference">modelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelTraining">modelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.syntheticDataGeneration">syntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}. |

---

##### `modelInference`<sup>Optional</sup> <a name="modelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelInference"></a>

```typescript
public readonly modelInference: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}.

---

##### `modelTraining`<sup>Optional</sup> <a name="modelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelTraining"></a>

```typescript
public readonly modelTraining: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}.

---

##### `syntheticDataGeneration`<sup>Optional</sup> <a name="syntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```typescript
public readonly syntheticDataGeneration: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference: cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining: cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration: cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute <a name="CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationCreatorPaymentConfigurationQueryCompute: cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationDataEncryptionMetadata <a name="CleanroomsCollaborationDataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationDataEncryptionMetadata: cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowCleartext">allowCleartext</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#allow_cleartext CleanroomsCollaboration#allow_cleartext}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates">allowDuplicates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames">allowJoinsOnColumnsWithDifferentNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls">preserveNulls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}. |

---

##### `allowCleartext`<sup>Optional</sup> <a name="allowCleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowCleartext"></a>

```typescript
public readonly allowCleartext: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#allow_cleartext CleanroomsCollaboration#allow_cleartext}.

---

##### `allowDuplicates`<sup>Optional</sup> <a name="allowDuplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates"></a>

```typescript
public readonly allowDuplicates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}.

---

##### `allowJoinsOnColumnsWithDifferentNames`<sup>Optional</sup> <a name="allowJoinsOnColumnsWithDifferentNames" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames"></a>

```typescript
public readonly allowJoinsOnColumnsWithDifferentNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}.

---

##### `preserveNulls`<sup>Optional</sup> <a name="preserveNulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls"></a>

```typescript
public readonly preserveNulls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}.

---

### CleanroomsCollaborationMembers <a name="CleanroomsCollaborationMembers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembers: cleanroomsCollaboration.CleanroomsCollaborationMembers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.memberAbilities">memberAbilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.mlMemberAbilities">mlMemberAbilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#ml_member_abilities CleanroomsCollaboration#ml_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.paymentConfiguration">paymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#payment_configuration CleanroomsCollaboration#payment_configuration}. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}.

---

##### `memberAbilities`<sup>Optional</sup> <a name="memberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.memberAbilities"></a>

```typescript
public readonly memberAbilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}.

---

##### `mlMemberAbilities`<sup>Optional</sup> <a name="mlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.mlMemberAbilities"></a>

```typescript
public readonly mlMemberAbilities: CleanroomsCollaborationMembersMlMemberAbilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#ml_member_abilities CleanroomsCollaboration#ml_member_abilities}.

---

##### `paymentConfiguration`<sup>Optional</sup> <a name="paymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.paymentConfiguration"></a>

```typescript
public readonly paymentConfiguration: CleanroomsCollaborationMembersPaymentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#payment_configuration CleanroomsCollaboration#payment_configuration}.

---

### CleanroomsCollaborationMembersMlMemberAbilities <a name="CleanroomsCollaborationMembersMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembersMlMemberAbilities: cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.property.customMlMemberAbilities">customMlMemberAbilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}. |

---

##### `customMlMemberAbilities`<sup>Optional</sup> <a name="customMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.property.customMlMemberAbilities"></a>

```typescript
public readonly customMlMemberAbilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}.

---

### CleanroomsCollaborationMembersPaymentConfiguration <a name="CleanroomsCollaborationMembersPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembersPaymentConfiguration: cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.jobCompute">jobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.queryCompute">queryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}. |

---

##### `jobCompute`<sup>Optional</sup> <a name="jobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.jobCompute"></a>

```typescript
public readonly jobCompute: CleanroomsCollaborationMembersPaymentConfigurationJobCompute;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}.

---

##### `machineLearning`<sup>Optional</sup> <a name="machineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.machineLearning"></a>

```typescript
public readonly machineLearning: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}.

---

##### `queryCompute`<sup>Optional</sup> <a name="queryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.queryCompute"></a>

```typescript
public readonly queryCompute: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}.

---

### CleanroomsCollaborationMembersPaymentConfigurationJobCompute <a name="CleanroomsCollaborationMembersPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembersPaymentConfigurationJobCompute: cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearning <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembersPaymentConfigurationMachineLearning: cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelInference">modelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelTraining">modelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.syntheticDataGeneration">syntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}. |

---

##### `modelInference`<sup>Optional</sup> <a name="modelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelInference"></a>

```typescript
public readonly modelInference: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}.

---

##### `modelTraining`<sup>Optional</sup> <a name="modelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelTraining"></a>

```typescript
public readonly modelTraining: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}.

---

##### `syntheticDataGeneration`<sup>Optional</sup> <a name="syntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```typescript
public readonly syntheticDataGeneration: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference: cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining: cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration: cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationQueryCompute <a name="CleanroomsCollaborationMembersPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationMembersPaymentConfigurationQueryCompute: cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationTags <a name="CleanroomsCollaborationTags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

const cleanroomsCollaborationTags: cleanroomsCollaboration.CleanroomsCollaborationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#key CleanroomsCollaboration#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#value CleanroomsCollaboration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#key CleanroomsCollaboration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_collaboration#value CleanroomsCollaboration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference <a name="CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities">resetCustomMlMemberAbilities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomMlMemberAbilities` <a name="resetCustomMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities"></a>

```typescript
public resetCustomMlMemberAbilities(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput">customMlMemberAbilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilities">customMlMemberAbilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customMlMemberAbilitiesInput`<sup>Optional</sup> <a name="customMlMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput"></a>

```typescript
public readonly customMlMemberAbilitiesInput: string[];
```

- *Type:* string[]

---

##### `customMlMemberAbilities`<sup>Required</sup> <a name="customMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilities"></a>

```typescript
public readonly customMlMemberAbilities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationCreatorMlMemberAbilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationJobCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference">putModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining">putModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">putSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelInference">resetModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelTraining">resetModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">resetSyntheticDataGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelInference` <a name="putModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```typescript
public putModelInference(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

---

##### `putModelTraining` <a name="putModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```typescript
public putModelTraining(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

---

##### `putSyntheticDataGeneration` <a name="putSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```typescript
public putSyntheticDataGeneration(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `resetModelInference` <a name="resetModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```typescript
public resetModelInference(): void
```

##### `resetModelTraining` <a name="resetModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```typescript
public resetModelTraining(): void
```

##### `resetSyntheticDataGeneration` <a name="resetSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```typescript
public resetSyntheticDataGeneration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInference">modelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTraining">modelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">syntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">modelInferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">modelTrainingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">syntheticDataGenerationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInference`<sup>Required</sup> <a name="modelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```typescript
public readonly modelInference: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `modelTraining`<sup>Required</sup> <a name="modelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```typescript
public readonly modelTraining: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `syntheticDataGeneration`<sup>Required</sup> <a name="syntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```typescript
public readonly syntheticDataGeneration: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `modelInferenceInput`<sup>Optional</sup> <a name="modelInferenceInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```typescript
public readonly modelInferenceInput: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

---

##### `modelTrainingInput`<sup>Optional</sup> <a name="modelTrainingInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```typescript
public readonly modelTrainingInput: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

---

##### `syntheticDataGenerationInput`<sup>Optional</sup> <a name="syntheticDataGenerationInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```typescript
public readonly syntheticDataGenerationInput: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute">putJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning">putMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute">putQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetJobCompute">resetJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetMachineLearning">resetMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetQueryCompute">resetQueryCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobCompute` <a name="putJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute"></a>

```typescript
public putJobCompute(value: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

---

##### `putMachineLearning` <a name="putMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning"></a>

```typescript
public putMachineLearning(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

---

##### `putQueryCompute` <a name="putQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute"></a>

```typescript
public putQueryCompute(value: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

---

##### `resetJobCompute` <a name="resetJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetJobCompute"></a>

```typescript
public resetJobCompute(): void
```

##### `resetMachineLearning` <a name="resetMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetMachineLearning"></a>

```typescript
public resetMachineLearning(): void
```

##### `resetQueryCompute` <a name="resetQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetQueryCompute"></a>

```typescript
public resetQueryCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobCompute">jobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryCompute">queryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobComputeInput">jobComputeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearningInput">machineLearningInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryComputeInput">queryComputeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobCompute`<sup>Required</sup> <a name="jobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobCompute"></a>

```typescript
public readonly jobCompute: CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference</a>

---

##### `machineLearning`<sup>Required</sup> <a name="machineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearning"></a>

```typescript
public readonly machineLearning: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference</a>

---

##### `queryCompute`<sup>Required</sup> <a name="queryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryCompute"></a>

```typescript
public readonly queryCompute: CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference</a>

---

##### `jobComputeInput`<sup>Optional</sup> <a name="jobComputeInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```typescript
public readonly jobComputeInput: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationJobCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

---

##### `machineLearningInput`<sup>Optional</sup> <a name="machineLearningInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```typescript
public readonly machineLearningInput: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

---

##### `queryComputeInput`<sup>Optional</sup> <a name="queryComputeInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```typescript
public readonly queryComputeInput: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationCreatorPaymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

---


### CleanroomsCollaborationDataEncryptionMetadataOutputReference <a name="CleanroomsCollaborationDataEncryptionMetadataOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowCleartext">resetAllowCleartext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowDuplicates">resetAllowDuplicates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowJoinsOnColumnsWithDifferentNames">resetAllowJoinsOnColumnsWithDifferentNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetPreserveNulls">resetPreserveNulls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCleartext` <a name="resetAllowCleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowCleartext"></a>

```typescript
public resetAllowCleartext(): void
```

##### `resetAllowDuplicates` <a name="resetAllowDuplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowDuplicates"></a>

```typescript
public resetAllowDuplicates(): void
```

##### `resetAllowJoinsOnColumnsWithDifferentNames` <a name="resetAllowJoinsOnColumnsWithDifferentNames" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowJoinsOnColumnsWithDifferentNames"></a>

```typescript
public resetAllowJoinsOnColumnsWithDifferentNames(): void
```

##### `resetPreserveNulls` <a name="resetPreserveNulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetPreserveNulls"></a>

```typescript
public resetPreserveNulls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartextInput">allowCleartextInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput">allowDuplicatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput">allowJoinsOnColumnsWithDifferentNamesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput">preserveNullsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartext">allowCleartext</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates">allowDuplicates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames">allowJoinsOnColumnsWithDifferentNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls">preserveNulls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCleartextInput`<sup>Optional</sup> <a name="allowCleartextInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartextInput"></a>

```typescript
public readonly allowCleartextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowDuplicatesInput`<sup>Optional</sup> <a name="allowDuplicatesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput"></a>

```typescript
public readonly allowDuplicatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowJoinsOnColumnsWithDifferentNamesInput`<sup>Optional</sup> <a name="allowJoinsOnColumnsWithDifferentNamesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput"></a>

```typescript
public readonly allowJoinsOnColumnsWithDifferentNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `preserveNullsInput`<sup>Optional</sup> <a name="preserveNullsInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput"></a>

```typescript
public readonly preserveNullsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowCleartext`<sup>Required</sup> <a name="allowCleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartext"></a>

```typescript
public readonly allowCleartext: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowDuplicates`<sup>Required</sup> <a name="allowDuplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates"></a>

```typescript
public readonly allowDuplicates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowJoinsOnColumnsWithDifferentNames`<sup>Required</sup> <a name="allowJoinsOnColumnsWithDifferentNames" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames"></a>

```typescript
public readonly allowJoinsOnColumnsWithDifferentNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `preserveNulls`<sup>Required</sup> <a name="preserveNulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls"></a>

```typescript
public readonly preserveNulls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationDataEncryptionMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---


### CleanroomsCollaborationMembersList <a name="CleanroomsCollaborationMembersList" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get"></a>

```typescript
public get(index: number): CleanroomsCollaborationMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>[]

---


### CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference <a name="CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities">resetCustomMlMemberAbilities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomMlMemberAbilities` <a name="resetCustomMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities"></a>

```typescript
public resetCustomMlMemberAbilities(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput">customMlMemberAbilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilities">customMlMemberAbilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customMlMemberAbilitiesInput`<sup>Optional</sup> <a name="customMlMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput"></a>

```typescript
public readonly customMlMemberAbilitiesInput: string[];
```

- *Type:* string[]

---

##### `customMlMemberAbilities`<sup>Required</sup> <a name="customMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilities"></a>

```typescript
public readonly customMlMemberAbilities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembersMlMemberAbilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

---


### CleanroomsCollaborationMembersOutputReference <a name="CleanroomsCollaborationMembersOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities">putMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration">putPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMemberAbilities">resetMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMlMemberAbilities">resetMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetPaymentConfiguration">resetPaymentConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMlMemberAbilities` <a name="putMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities"></a>

```typescript
public putMlMemberAbilities(value: CleanroomsCollaborationMembersMlMemberAbilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

---

##### `putPaymentConfiguration` <a name="putPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration"></a>

```typescript
public putPaymentConfiguration(value: CleanroomsCollaborationMembersPaymentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetMemberAbilities` <a name="resetMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMemberAbilities"></a>

```typescript
public resetMemberAbilities(): void
```

##### `resetMlMemberAbilities` <a name="resetMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMlMemberAbilities"></a>

```typescript
public resetMlMemberAbilities(): void
```

##### `resetPaymentConfiguration` <a name="resetPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetPaymentConfiguration"></a>

```typescript
public resetPaymentConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilities">mlMemberAbilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference">CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfiguration">paymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilitiesInput">memberAbilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilitiesInput">mlMemberAbilitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfigurationInput">paymentConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilities">memberAbilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mlMemberAbilities`<sup>Required</sup> <a name="mlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilities"></a>

```typescript
public readonly mlMemberAbilities: CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference">CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference</a>

---

##### `paymentConfiguration`<sup>Required</sup> <a name="paymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfiguration"></a>

```typescript
public readonly paymentConfiguration: CleanroomsCollaborationMembersPaymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `memberAbilitiesInput`<sup>Optional</sup> <a name="memberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilitiesInput"></a>

```typescript
public readonly memberAbilitiesInput: string[];
```

- *Type:* string[]

---

##### `mlMemberAbilitiesInput`<sup>Optional</sup> <a name="mlMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilitiesInput"></a>

```typescript
public readonly mlMemberAbilitiesInput: IResolvable | CleanroomsCollaborationMembersMlMemberAbilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

---

##### `paymentConfigurationInput`<sup>Optional</sup> <a name="paymentConfigurationInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfigurationInput"></a>

```typescript
public readonly paymentConfigurationInput: IResolvable | CleanroomsCollaborationMembersPaymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `memberAbilities`<sup>Required</sup> <a name="memberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilities"></a>

```typescript
public readonly memberAbilities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationJobCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference">putModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining">putModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">putSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelInference">resetModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelTraining">resetModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">resetSyntheticDataGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelInference` <a name="putModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```typescript
public putModelInference(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

---

##### `putModelTraining` <a name="putModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```typescript
public putModelTraining(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

---

##### `putSyntheticDataGeneration` <a name="putSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```typescript
public putSyntheticDataGeneration(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `resetModelInference` <a name="resetModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```typescript
public resetModelInference(): void
```

##### `resetModelTraining` <a name="resetModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```typescript
public resetModelTraining(): void
```

##### `resetSyntheticDataGeneration` <a name="resetSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```typescript
public resetSyntheticDataGeneration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInference">modelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTraining">modelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">syntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">modelInferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">modelTrainingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">syntheticDataGenerationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInference`<sup>Required</sup> <a name="modelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```typescript
public readonly modelInference: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `modelTraining`<sup>Required</sup> <a name="modelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```typescript
public readonly modelTraining: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `syntheticDataGeneration`<sup>Required</sup> <a name="syntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```typescript
public readonly syntheticDataGeneration: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `modelInferenceInput`<sup>Optional</sup> <a name="modelInferenceInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```typescript
public readonly modelInferenceInput: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

---

##### `modelTrainingInput`<sup>Optional</sup> <a name="modelTrainingInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```typescript
public readonly modelTrainingInput: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

---

##### `syntheticDataGenerationInput`<sup>Optional</sup> <a name="syntheticDataGenerationInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```typescript
public readonly syntheticDataGenerationInput: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute">putJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning">putMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute">putQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetJobCompute">resetJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetMachineLearning">resetMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetQueryCompute">resetQueryCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobCompute` <a name="putJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute"></a>

```typescript
public putJobCompute(value: CleanroomsCollaborationMembersPaymentConfigurationJobCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

---

##### `putMachineLearning` <a name="putMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning"></a>

```typescript
public putMachineLearning(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

---

##### `putQueryCompute` <a name="putQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute"></a>

```typescript
public putQueryCompute(value: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

---

##### `resetJobCompute` <a name="resetJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetJobCompute"></a>

```typescript
public resetJobCompute(): void
```

##### `resetMachineLearning` <a name="resetMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetMachineLearning"></a>

```typescript
public resetMachineLearning(): void
```

##### `resetQueryCompute` <a name="resetQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetQueryCompute"></a>

```typescript
public resetQueryCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobCompute">jobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryCompute">queryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobComputeInput">jobComputeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearningInput">machineLearningInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryComputeInput">queryComputeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobCompute`<sup>Required</sup> <a name="jobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobCompute"></a>

```typescript
public readonly jobCompute: CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference</a>

---

##### `machineLearning`<sup>Required</sup> <a name="machineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearning"></a>

```typescript
public readonly machineLearning: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference</a>

---

##### `queryCompute`<sup>Required</sup> <a name="queryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryCompute"></a>

```typescript
public readonly queryCompute: CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference</a>

---

##### `jobComputeInput`<sup>Optional</sup> <a name="jobComputeInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```typescript
public readonly jobComputeInput: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationJobCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

---

##### `machineLearningInput`<sup>Optional</sup> <a name="machineLearningInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```typescript
public readonly machineLearningInput: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

---

##### `queryComputeInput`<sup>Optional</sup> <a name="queryComputeInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```typescript
public readonly queryComputeInput: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationQueryCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembersPaymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationQueryCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

---


### CleanroomsCollaborationTagsList <a name="CleanroomsCollaborationTagsList" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get"></a>

```typescript
public get(index: number): CleanroomsCollaborationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>[]

---


### CleanroomsCollaborationTagsOutputReference <a name="CleanroomsCollaborationTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktn/provider-awscc'

new cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>

---




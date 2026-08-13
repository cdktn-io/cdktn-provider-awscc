# `rolesanywhereTrustAnchor` Submodule <a name="`rolesanywhereTrustAnchor` Submodule" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereTrustAnchor <a name="RolesanywhereTrustAnchor" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor awscc_rolesanywhere_trust_anchor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new rolesanywhereTrustAnchor.RolesanywhereTrustAnchor(scope: Construct, id: string, config: RolesanywhereTrustAnchorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig">RolesanywhereTrustAnchorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig">RolesanywhereTrustAnchorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings"></a>

```typescript
public putNotificationSettings(value: IResolvable | RolesanywhereTrustAnchorNotificationSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>[]

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource"></a>

```typescript
public putSource(value: RolesanywhereTrustAnchorSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putTags"></a>

```typescript
public putTags(value: IResolvable | RolesanywhereTrustAnchorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetNotificationSettings"></a>

```typescript
public resetNotificationSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RolesanywhereTrustAnchor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RolesanywhereTrustAnchor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RolesanywhereTrustAnchor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RolesanywhereTrustAnchor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RolesanywhereTrustAnchor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList">RolesanywhereTrustAnchorNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference">RolesanywhereTrustAnchorSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList">RolesanywhereTrustAnchorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.trustAnchorArn">trustAnchorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.trustAnchorId">trustAnchorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: RolesanywhereTrustAnchorNotificationSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList">RolesanywhereTrustAnchorNotificationSettingsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.source"></a>

```typescript
public readonly source: RolesanywhereTrustAnchorSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference">RolesanywhereTrustAnchorSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tags"></a>

```typescript
public readonly tags: RolesanywhereTrustAnchorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList">RolesanywhereTrustAnchorTagsList</a>

---

##### `trustAnchorArn`<sup>Required</sup> <a name="trustAnchorArn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.trustAnchorArn"></a>

```typescript
public readonly trustAnchorArn: string;
```

- *Type:* string

---

##### `trustAnchorId`<sup>Required</sup> <a name="trustAnchorId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.trustAnchorId"></a>

```typescript
public readonly trustAnchorId: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettingsInput"></a>

```typescript
public readonly notificationSettingsInput: IResolvable | RolesanywhereTrustAnchorNotificationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | RolesanywhereTrustAnchorSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RolesanywhereTrustAnchorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereTrustAnchorConfig <a name="RolesanywhereTrustAnchorConfig" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const rolesanywhereTrustAnchorConfig: rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source RolesanywhereTrustAnchor#source}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.notificationSettings">notificationSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#notification_settings RolesanywhereTrustAnchor#notification_settings}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.source"></a>

```typescript
public readonly source: RolesanywhereTrustAnchorSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source RolesanywhereTrustAnchor#source}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}.

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: IResolvable | RolesanywhereTrustAnchorNotificationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#notification_settings RolesanywhereTrustAnchor#notification_settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RolesanywhereTrustAnchorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}.

---

### RolesanywhereTrustAnchorNotificationSettings <a name="RolesanywhereTrustAnchorNotificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const rolesanywhereTrustAnchorNotificationSettings: rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.channel">channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#channel RolesanywhereTrustAnchor#channel}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.event">event</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#event RolesanywhereTrustAnchor#event}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#threshold RolesanywhereTrustAnchor#threshold}. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#channel RolesanywhereTrustAnchor#channel}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}.

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#event RolesanywhereTrustAnchor#event}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#threshold RolesanywhereTrustAnchor#threshold}.

---

### RolesanywhereTrustAnchorSource <a name="RolesanywhereTrustAnchorSource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const rolesanywhereTrustAnchorSource: rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceData">sourceData</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source_data RolesanywhereTrustAnchor#source_data}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}. |

---

##### `sourceData`<sup>Required</sup> <a name="sourceData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceData"></a>

```typescript
public readonly sourceData: RolesanywhereTrustAnchorSourceSourceData;
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source_data RolesanywhereTrustAnchor#source_data}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}.

---

### RolesanywhereTrustAnchorSourceSourceData <a name="RolesanywhereTrustAnchorSourceSourceData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const rolesanywhereTrustAnchorSourceSourceData: rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.acmPcaArn">acmPcaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.x509CertificateData">x509CertificateData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}. |

---

##### `acmPcaArn`<sup>Optional</sup> <a name="acmPcaArn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.acmPcaArn"></a>

```typescript
public readonly acmPcaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}.

---

##### `x509CertificateData`<sup>Optional</sup> <a name="x509CertificateData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.x509CertificateData"></a>

```typescript
public readonly x509CertificateData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}.

---

### RolesanywhereTrustAnchorTags <a name="RolesanywhereTrustAnchorTags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const rolesanywhereTrustAnchorTags: rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#key RolesanywhereTrustAnchor#key}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#value RolesanywhereTrustAnchor#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#key RolesanywhereTrustAnchor#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#value RolesanywhereTrustAnchor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RolesanywhereTrustAnchorNotificationSettingsList <a name="RolesanywhereTrustAnchorNotificationSettingsList" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get"></a>

```typescript
public get(index: number): RolesanywhereTrustAnchorNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RolesanywhereTrustAnchorNotificationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>[]

---


### RolesanywhereTrustAnchorNotificationSettingsOutputReference <a name="RolesanywhereTrustAnchorNotificationSettingsOutputReference" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEvent` <a name="resetEvent" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEvent"></a>

```typescript
public resetEvent(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.eventInput">eventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RolesanywhereTrustAnchorNotificationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>

---


### RolesanywhereTrustAnchorSourceOutputReference <a name="RolesanywhereTrustAnchorSourceOutputReference" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData">putSourceData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceData` <a name="putSourceData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData"></a>

```typescript
public putSourceData(value: RolesanywhereTrustAnchorSourceSourceData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceData">sourceData</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference">RolesanywhereTrustAnchorSourceSourceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceDataInput">sourceDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceData`<sup>Required</sup> <a name="sourceData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceData"></a>

```typescript
public readonly sourceData: RolesanywhereTrustAnchorSourceSourceDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference">RolesanywhereTrustAnchorSourceSourceDataOutputReference</a>

---

##### `sourceDataInput`<sup>Optional</sup> <a name="sourceDataInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceDataInput"></a>

```typescript
public readonly sourceDataInput: IResolvable | RolesanywhereTrustAnchorSourceSourceData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RolesanywhereTrustAnchorSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

---


### RolesanywhereTrustAnchorSourceSourceDataOutputReference <a name="RolesanywhereTrustAnchorSourceSourceDataOutputReference" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetAcmPcaArn">resetAcmPcaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetX509CertificateData">resetX509CertificateData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcmPcaArn` <a name="resetAcmPcaArn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetAcmPcaArn"></a>

```typescript
public resetAcmPcaArn(): void
```

##### `resetX509CertificateData` <a name="resetX509CertificateData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetX509CertificateData"></a>

```typescript
public resetX509CertificateData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArnInput">acmPcaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateDataInput">x509CertificateDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArn">acmPcaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateData">x509CertificateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acmPcaArnInput`<sup>Optional</sup> <a name="acmPcaArnInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArnInput"></a>

```typescript
public readonly acmPcaArnInput: string;
```

- *Type:* string

---

##### `x509CertificateDataInput`<sup>Optional</sup> <a name="x509CertificateDataInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateDataInput"></a>

```typescript
public readonly x509CertificateDataInput: string;
```

- *Type:* string

---

##### `acmPcaArn`<sup>Required</sup> <a name="acmPcaArn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArn"></a>

```typescript
public readonly acmPcaArn: string;
```

- *Type:* string

---

##### `x509CertificateData`<sup>Required</sup> <a name="x509CertificateData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateData"></a>

```typescript
public readonly x509CertificateData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RolesanywhereTrustAnchorSourceSourceData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

---


### RolesanywhereTrustAnchorTagsList <a name="RolesanywhereTrustAnchorTagsList" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.get"></a>

```typescript
public get(index: number): RolesanywhereTrustAnchorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RolesanywhereTrustAnchorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a>[]

---


### RolesanywhereTrustAnchorTagsOutputReference <a name="RolesanywhereTrustAnchorTagsOutputReference" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer"></a>

```typescript
import { rolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RolesanywhereTrustAnchorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags">RolesanywhereTrustAnchorTags</a>

---




# `wellarchitectedAgentOrganizationalProfile` Submodule <a name="`wellarchitectedAgentOrganizationalProfile` Submodule" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedAgentOrganizationalProfile <a name="WellarchitectedAgentOrganizationalProfile" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile awscc_wellarchitected_agent_organizational_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.Initializer"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

new wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile(scope: Construct, id: string, config: WellarchitectedAgentOrganizationalProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig">WellarchitectedAgentOrganizationalProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig">WellarchitectedAgentOrganizationalProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetBusinessOverview">resetBusinessOverview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | WellarchitectedAgentOrganizationalProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a>[]

---

##### `resetBusinessOverview` <a name="resetBusinessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetBusinessOverview"></a>

```typescript
public resetBusinessOverview(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedAgentOrganizationalProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isConstruct"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isTerraformElement"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isTerraformResource"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.generateConfigForImport"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WellarchitectedAgentOrganizationalProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WellarchitectedAgentOrganizationalProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WellarchitectedAgentOrganizationalProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedAgentOrganizationalProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.lastModifiedBy">lastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList">WellarchitectedAgentOrganizationalProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.businessOverviewInput">businessOverviewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.pillarsInput">pillarsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.businessOverview">businessOverview</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.pillars">pillars</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.lastModifiedBy"></a>

```typescript
public readonly lastModifiedBy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.tags"></a>

```typescript
public readonly tags: WellarchitectedAgentOrganizationalProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList">WellarchitectedAgentOrganizationalProfileTagsList</a>

---

##### `businessOverviewInput`<sup>Optional</sup> <a name="businessOverviewInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.businessOverviewInput"></a>

```typescript
public readonly businessOverviewInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pillarsInput`<sup>Optional</sup> <a name="pillarsInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.pillarsInput"></a>

```typescript
public readonly pillarsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WellarchitectedAgentOrganizationalProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a>[]

---

##### `businessOverview`<sup>Required</sup> <a name="businessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.businessOverview"></a>

```typescript
public readonly businessOverview: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pillars`<sup>Required</sup> <a name="pillars" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.pillars"></a>

```typescript
public readonly pillars: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedAgentOrganizationalProfileConfig <a name="WellarchitectedAgentOrganizationalProfileConfig" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.Initializer"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

const wellarchitectedAgentOrganizationalProfileConfig: wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the organizational profile. Unique within the account and used as the last component of the ARN. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.pillars">pillars</a></code> | <code>string[]</code> | The list of Well-Architected pillars to focus on. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.businessOverview">businessOverview</a></code> | <code>string</code> | A business overview for the organizational profile used to improve recommendation quality. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether deletion protection is enabled for the organizational profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.description">description</a></code> | <code>string</code> | A description of the organizational profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable display name of the organizational profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a>[]</code> | Key-value pairs to associate with the Agent Organizational Profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the organizational profile. Unique within the account and used as the last component of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#name WellarchitectedAgentOrganizationalProfile#name}

---

##### `pillars`<sup>Required</sup> <a name="pillars" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.pillars"></a>

```typescript
public readonly pillars: string[];
```

- *Type:* string[]

The list of Well-Architected pillars to focus on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#pillars WellarchitectedAgentOrganizationalProfile#pillars}

---

##### `businessOverview`<sup>Optional</sup> <a name="businessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.businessOverview"></a>

```typescript
public readonly businessOverview: string;
```

- *Type:* string

A business overview for the organizational profile used to improve recommendation quality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#business_overview WellarchitectedAgentOrganizationalProfile#business_overview}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether deletion protection is enabled for the organizational profile.

When enabled, the profile cannot be deleted until deletion protection is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#deletion_protection WellarchitectedAgentOrganizationalProfile#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the organizational profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#description WellarchitectedAgentOrganizationalProfile#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable display name of the organizational profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#display_name WellarchitectedAgentOrganizationalProfile#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WellarchitectedAgentOrganizationalProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a>[]

Key-value pairs to associate with the Agent Organizational Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#tags WellarchitectedAgentOrganizationalProfile#tags}

---

### WellarchitectedAgentOrganizationalProfileTags <a name="WellarchitectedAgentOrganizationalProfileTags" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags.Initializer"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

const wellarchitectedAgentOrganizationalProfileTags: wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#key WellarchitectedAgentOrganizationalProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#value WellarchitectedAgentOrganizationalProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedAgentOrganizationalProfileTagsList <a name="WellarchitectedAgentOrganizationalProfileTagsList" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.Initializer"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

new wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.get"></a>

```typescript
public get(index: number): WellarchitectedAgentOrganizationalProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WellarchitectedAgentOrganizationalProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a>[]

---


### WellarchitectedAgentOrganizationalProfileTagsOutputReference <a name="WellarchitectedAgentOrganizationalProfileTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer"></a>

```typescript
import { wellarchitectedAgentOrganizationalProfile } from '@cdktn/provider-awscc'

new wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WellarchitectedAgentOrganizationalProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedAgentOrganizationalProfile.WellarchitectedAgentOrganizationalProfileTags">WellarchitectedAgentOrganizationalProfileTags</a>

---




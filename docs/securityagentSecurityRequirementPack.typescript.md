# `securityagentSecurityRequirementPack` Submodule <a name="`securityagentSecurityRequirementPack` Submodule" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentSecurityRequirementPack <a name="SecurityagentSecurityRequirementPack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack(scope: Construct, id: string, config: SecurityagentSecurityRequirementPackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig">SecurityagentSecurityRequirementPackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig">SecurityagentSecurityRequirementPackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements">putSecurityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements">resetSecurityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecurityRequirements` <a name="putSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements"></a>

```typescript
public putSecurityRequirements(value: IResolvable | SecurityagentSecurityRequirementPackSecurityRequirements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags"></a>

```typescript
public putTags(value: IResolvable | SecurityagentSecurityRequirementPackTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSecurityRequirements` <a name="resetSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements"></a>

```typescript
public resetSecurityRequirements(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityagentSecurityRequirementPack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityagentSecurityRequirementPack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentSecurityRequirementPack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId">packId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements">securityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput">securityRequirementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packId`<sup>Required</sup> <a name="packId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId"></a>

```typescript
public readonly packId: string;
```

- *Type:* string

---

##### `securityRequirements`<sup>Required</sup> <a name="securityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements"></a>

```typescript
public readonly securityRequirements: SecurityagentSecurityRequirementPackSecurityRequirementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags"></a>

```typescript
public readonly tags: SecurityagentSecurityRequirementPackTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityRequirementsInput`<sup>Optional</sup> <a name="securityRequirementsInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput"></a>

```typescript
public readonly securityRequirementsInput: IResolvable | SecurityagentSecurityRequirementPackSecurityRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SecurityagentSecurityRequirementPackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentSecurityRequirementPackConfig <a name="SecurityagentSecurityRequirementPackConfig" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.Initializer"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

const securityagentSecurityRequirementPackConfig: securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name">name</a></code> | <code>string</code> | Name of the security requirement pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description">description</a></code> | <code>string</code> | Description of the pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | KMS key for client-side encryption of pack contents. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements">securityRequirements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]</code> | Security requirements within this pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status">status</a></code> | <code>string</code> | Whether the pack is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]</code> | Tags for the security requirement pack. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

KMS key for client-side encryption of pack contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#kms_key_id SecurityagentSecurityRequirementPack#kms_key_id}

---

##### `securityRequirements`<sup>Optional</sup> <a name="securityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements"></a>

```typescript
public readonly securityRequirements: IResolvable | SecurityagentSecurityRequirementPackSecurityRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]

Security requirements within this pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#security_requirements SecurityagentSecurityRequirementPack#security_requirements}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Whether the pack is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#status SecurityagentSecurityRequirementPack#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SecurityagentSecurityRequirementPackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]

Tags for the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#tags SecurityagentSecurityRequirementPack#tags}

---

### SecurityagentSecurityRequirementPackSecurityRequirements <a name="SecurityagentSecurityRequirementPackSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.Initializer"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

const securityagentSecurityRequirementPackSecurityRequirements: securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description">description</a></code> | <code>string</code> | Description of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain">domain</a></code> | <code>string</code> | Security domain this requirement belongs to. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation">evaluation</a></code> | <code>string</code> | How to evaluate compliance with this requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name">name</a></code> | <code>string</code> | Name of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation">remediation</a></code> | <code>string</code> | How to remediate non-compliance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Security domain this requirement belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#domain SecurityagentSecurityRequirementPack#domain}

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation"></a>

```typescript
public readonly evaluation: string;
```

- *Type:* string

How to evaluate compliance with this requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#evaluation SecurityagentSecurityRequirementPack#evaluation}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

How to remediate non-compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#remediation SecurityagentSecurityRequirementPack#remediation}

---

### SecurityagentSecurityRequirementPackTags <a name="SecurityagentSecurityRequirementPackTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.Initializer"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

const securityagentSecurityRequirementPackTags: securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#key SecurityagentSecurityRequirementPack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#value SecurityagentSecurityRequirementPack#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentSecurityRequirementPackSecurityRequirementsList <a name="SecurityagentSecurityRequirementPackSecurityRequirementsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get"></a>

```typescript
public get(index: number): SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentSecurityRequirementPackSecurityRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]

---


### SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference <a name="SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation">resetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation">resetRemediation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetEvaluation` <a name="resetEvaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation"></a>

```typescript
public resetEvaluation(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRemediation` <a name="resetRemediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation"></a>

```typescript
public resetRemediation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput">evaluationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput">remediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation">evaluation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation">remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `evaluationInput`<sup>Optional</sup> <a name="evaluationInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput"></a>

```typescript
public readonly evaluationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remediationInput`<sup>Optional</sup> <a name="remediationInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput"></a>

```typescript
public readonly remediationInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation"></a>

```typescript
public readonly evaluation: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentSecurityRequirementPackSecurityRequirements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>

---


### SecurityagentSecurityRequirementPackTagsList <a name="SecurityagentSecurityRequirementPackTagsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get"></a>

```typescript
public get(index: number): SecurityagentSecurityRequirementPackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentSecurityRequirementPackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]

---


### SecurityagentSecurityRequirementPackTagsOutputReference <a name="SecurityagentSecurityRequirementPackTagsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer"></a>

```typescript
import { securityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentSecurityRequirementPackTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>

---




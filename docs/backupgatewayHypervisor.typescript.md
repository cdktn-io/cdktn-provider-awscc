# `backupgatewayHypervisor` Submodule <a name="`backupgatewayHypervisor` Submodule" id="@cdktn/provider-awscc.backupgatewayHypervisor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupgatewayHypervisor <a name="BackupgatewayHypervisor" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor awscc_backupgateway_hypervisor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

new backupgatewayHypervisor.BackupgatewayHypervisor(scope: Construct, id: string, config?: BackupgatewayHypervisorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig">BackupgatewayHypervisorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig">BackupgatewayHypervisorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.putTags"></a>

```typescript
public putTags(value: IResolvable | BackupgatewayHypervisorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>[]

---

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupgatewayHypervisor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isConstruct"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

backupgatewayHypervisor.BackupgatewayHypervisor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformElement"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformResource"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupgatewayHypervisor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupgatewayHypervisor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupgatewayHypervisor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupgatewayHypervisor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.hypervisorArn">hypervisorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList">BackupgatewayHypervisorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hypervisorArn`<sup>Required</sup> <a name="hypervisorArn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.hypervisorArn"></a>

```typescript
public readonly hypervisorArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tags"></a>

```typescript
public readonly tags: BackupgatewayHypervisorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList">BackupgatewayHypervisorTagsList</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BackupgatewayHypervisorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupgatewayHypervisorConfig <a name="BackupgatewayHypervisorConfig" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.Initializer"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

const backupgatewayHypervisorConfig: backupgatewayHypervisor.BackupgatewayHypervisorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#host BackupgatewayHypervisor#host}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#kms_key_arn BackupgatewayHypervisor#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#log_group_arn BackupgatewayHypervisor#log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#name BackupgatewayHypervisor#name}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#password BackupgatewayHypervisor#password}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#tags BackupgatewayHypervisor#tags}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#username BackupgatewayHypervisor#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#host BackupgatewayHypervisor#host}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#kms_key_arn BackupgatewayHypervisor#kms_key_arn}.

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#log_group_arn BackupgatewayHypervisor#log_group_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#name BackupgatewayHypervisor#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#password BackupgatewayHypervisor#password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BackupgatewayHypervisorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#tags BackupgatewayHypervisor#tags}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#username BackupgatewayHypervisor#username}.

---

### BackupgatewayHypervisorTags <a name="BackupgatewayHypervisorTags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.Initializer"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

const backupgatewayHypervisorTags: backupgatewayHypervisor.BackupgatewayHypervisorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#key BackupgatewayHypervisor#key}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#value BackupgatewayHypervisor#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#key BackupgatewayHypervisor#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#value BackupgatewayHypervisor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupgatewayHypervisorTagsList <a name="BackupgatewayHypervisorTagsList" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

new backupgatewayHypervisor.BackupgatewayHypervisorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.get"></a>

```typescript
public get(index: number): BackupgatewayHypervisorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupgatewayHypervisorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>[]

---


### BackupgatewayHypervisorTagsOutputReference <a name="BackupgatewayHypervisorTagsOutputReference" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer"></a>

```typescript
import { backupgatewayHypervisor } from '@cdktn/provider-awscc'

new backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupgatewayHypervisorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>

---




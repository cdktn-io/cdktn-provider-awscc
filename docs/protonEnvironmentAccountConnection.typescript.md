# `protonEnvironmentAccountConnection` Submodule <a name="`protonEnvironmentAccountConnection` Submodule" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProtonEnvironmentAccountConnection <a name="ProtonEnvironmentAccountConnection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection awscc_proton_environment_account_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

new protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection(scope: Construct, id: string, config?: ProtonEnvironmentAccountConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig">ProtonEnvironmentAccountConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig">ProtonEnvironmentAccountConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetCodebuildRoleArn">resetCodebuildRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetComponentRoleArn">resetComponentRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentAccountId">resetEnvironmentAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentName">resetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetManagementAccountId">resetManagementAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags"></a>

```typescript
public putTags(value: IResolvable | ProtonEnvironmentAccountConnectionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]

---

##### `resetCodebuildRoleArn` <a name="resetCodebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetCodebuildRoleArn"></a>

```typescript
public resetCodebuildRoleArn(): void
```

##### `resetComponentRoleArn` <a name="resetComponentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetComponentRoleArn"></a>

```typescript
public resetComponentRoleArn(): void
```

##### `resetEnvironmentAccountId` <a name="resetEnvironmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentAccountId"></a>

```typescript
public resetEnvironmentAccountId(): void
```

##### `resetEnvironmentName` <a name="resetEnvironmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentName"></a>

```typescript
public resetEnvironmentName(): void
```

##### `resetManagementAccountId` <a name="resetManagementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetManagementAccountId"></a>

```typescript
public resetManagementAccountId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProtonEnvironmentAccountConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProtonEnvironmentAccountConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ProtonEnvironmentAccountConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountConnectionId">environmentAccountConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList">ProtonEnvironmentAccountConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArnInput">codebuildRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArnInput">componentRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountIdInput">environmentAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentNameInput">environmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountIdInput">managementAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArn">codebuildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArn">componentRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountId">environmentAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `environmentAccountConnectionId`<sup>Required</sup> <a name="environmentAccountConnectionId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountConnectionId"></a>

```typescript
public readonly environmentAccountConnectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tags"></a>

```typescript
public readonly tags: ProtonEnvironmentAccountConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList">ProtonEnvironmentAccountConnectionTagsList</a>

---

##### `codebuildRoleArnInput`<sup>Optional</sup> <a name="codebuildRoleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArnInput"></a>

```typescript
public readonly codebuildRoleArnInput: string;
```

- *Type:* string

---

##### `componentRoleArnInput`<sup>Optional</sup> <a name="componentRoleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArnInput"></a>

```typescript
public readonly componentRoleArnInput: string;
```

- *Type:* string

---

##### `environmentAccountIdInput`<sup>Optional</sup> <a name="environmentAccountIdInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountIdInput"></a>

```typescript
public readonly environmentAccountIdInput: string;
```

- *Type:* string

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentNameInput"></a>

```typescript
public readonly environmentNameInput: string;
```

- *Type:* string

---

##### `managementAccountIdInput`<sup>Optional</sup> <a name="managementAccountIdInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountIdInput"></a>

```typescript
public readonly managementAccountIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ProtonEnvironmentAccountConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]

---

##### `codebuildRoleArn`<sup>Required</sup> <a name="codebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArn"></a>

```typescript
public readonly codebuildRoleArn: string;
```

- *Type:* string

---

##### `componentRoleArn`<sup>Required</sup> <a name="componentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArn"></a>

```typescript
public readonly componentRoleArn: string;
```

- *Type:* string

---

##### `environmentAccountId`<sup>Required</sup> <a name="environmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountId"></a>

```typescript
public readonly environmentAccountId: string;
```

- *Type:* string

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `managementAccountId`<sup>Required</sup> <a name="managementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProtonEnvironmentAccountConnectionConfig <a name="ProtonEnvironmentAccountConnectionConfig" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.Initializer"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

const protonEnvironmentAccountConnectionConfig: protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.codebuildRoleArn">codebuildRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM service role in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.componentRoleArn">componentRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentAccountId">environmentAccountId</a></code> | <code>string</code> | The environment account that's connected to the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentName">environmentName</a></code> | <code>string</code> | The name of the AWS Proton environment that's created in the associated management account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | The ID of the management account that accepts or rejects the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]</code> | <p>An optional list of metadata items that you can associate with the Proton environment account connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `codebuildRoleArn`<sup>Optional</sup> <a name="codebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.codebuildRoleArn"></a>

```typescript
public readonly codebuildRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM service role in the environment account.

AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#codebuild_role_arn ProtonEnvironmentAccountConnection#codebuild_role_arn}

---

##### `componentRoleArn`<sup>Optional</sup> <a name="componentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.componentRoleArn"></a>

```typescript
public readonly componentRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account.

It determines the scope of infrastructure that a component can provision in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#component_role_arn ProtonEnvironmentAccountConnection#component_role_arn}

---

##### `environmentAccountId`<sup>Optional</sup> <a name="environmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentAccountId"></a>

```typescript
public readonly environmentAccountId: string;
```

- *Type:* string

The environment account that's connected to the environment account connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#environment_account_id ProtonEnvironmentAccountConnection#environment_account_id}

---

##### `environmentName`<sup>Optional</sup> <a name="environmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The name of the AWS Proton environment that's created in the associated management account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#environment_name ProtonEnvironmentAccountConnection#environment_name}

---

##### `managementAccountId`<sup>Optional</sup> <a name="managementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

The ID of the management account that accepts or rejects the environment account connection.

You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#management_account_id ProtonEnvironmentAccountConnection#management_account_id}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account.

AWS Proton uses this role to provision infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#role_arn ProtonEnvironmentAccountConnection#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ProtonEnvironmentAccountConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]

<p>An optional list of metadata items that you can associate with the Proton environment account connection.

A tag is a key-value pair.</p>
         <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
        <i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#tags ProtonEnvironmentAccountConnection#tags}

---

### ProtonEnvironmentAccountConnectionTags <a name="ProtonEnvironmentAccountConnectionTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.Initializer"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

const protonEnvironmentAccountConnectionTags: protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.key">key</a></code> | <code>string</code> | <p>The key of the resource tag.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.value">value</a></code> | <code>string</code> | <p>The value of the resource tag.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

<p>The key of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#key ProtonEnvironmentAccountConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

<p>The value of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#value ProtonEnvironmentAccountConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ProtonEnvironmentAccountConnectionTagsList <a name="ProtonEnvironmentAccountConnectionTagsList" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

new protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get"></a>

```typescript
public get(index: number): ProtonEnvironmentAccountConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProtonEnvironmentAccountConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]

---


### ProtonEnvironmentAccountConnectionTagsOutputReference <a name="ProtonEnvironmentAccountConnectionTagsOutputReference" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer"></a>

```typescript
import { protonEnvironmentAccountConnection } from '@cdktn/provider-awscc'

new protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProtonEnvironmentAccountConnectionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>

---




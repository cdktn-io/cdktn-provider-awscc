# `sagemakerWorkteam` Submodule <a name="`sagemakerWorkteam` Submodule" id="@cdktn/provider-awscc.sagemakerWorkteam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkteam <a name="SagemakerWorkteam" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam awscc_sagemaker_workteam}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

new sagemakerWorkteam.SagemakerWorkteam(scope: Construct, id: string, config: SagemakerWorkteamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions">putMemberDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration">putNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration">resetNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName">resetWorkforceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkteamName">resetWorkteamName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMemberDefinitions` <a name="putMemberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions"></a>

```typescript
public putMemberDefinitions(value: IResolvable | SagemakerWorkteamMemberDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>[]

---

##### `putNotificationConfiguration` <a name="putNotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration"></a>

```typescript
public putNotificationConfiguration(value: SagemakerWorkteamNotificationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerWorkteamTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>[]

---

##### `resetNotificationConfiguration` <a name="resetNotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration"></a>

```typescript
public resetNotificationConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkforceName` <a name="resetWorkforceName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName"></a>

```typescript
public resetWorkforceName(): void
```

##### `resetWorkteamName` <a name="resetWorkteamName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkteamName"></a>

```typescript
public resetWorkteamName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerWorkteam resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

sagemakerWorkteam.SagemakerWorkteam.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

sagemakerWorkteam.SagemakerWorkteam.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

sagemakerWorkteam.SagemakerWorkteam.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerWorkteam resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerWorkteam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerWorkteam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerWorkteam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitions">memberDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList">SagemakerWorkteamMemberDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList">SagemakerWorkteamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamArn">workteamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionsInput">memberDefinitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput">notificationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput">workforceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput">workteamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceName">workforceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamName">workteamName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberDefinitions`<sup>Required</sup> <a name="memberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitions"></a>

```typescript
public readonly memberDefinitions: SagemakerWorkteamMemberDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList">SagemakerWorkteamMemberDefinitionsList</a>

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: SagemakerWorkteamNotificationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tags"></a>

```typescript
public readonly tags: SagemakerWorkteamTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList">SagemakerWorkteamTagsList</a>

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamArn"></a>

```typescript
public readonly workteamArn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `memberDefinitionsInput`<sup>Optional</sup> <a name="memberDefinitionsInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionsInput"></a>

```typescript
public readonly memberDefinitionsInput: IResolvable | SagemakerWorkteamMemberDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>[]

---

##### `notificationConfigurationInput`<sup>Optional</sup> <a name="notificationConfigurationInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput"></a>

```typescript
public readonly notificationConfigurationInput: IResolvable | SagemakerWorkteamNotificationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerWorkteamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>[]

---

##### `workforceNameInput`<sup>Optional</sup> <a name="workforceNameInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput"></a>

```typescript
public readonly workforceNameInput: string;
```

- *Type:* string

---

##### `workteamNameInput`<sup>Optional</sup> <a name="workteamNameInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput"></a>

```typescript
public readonly workteamNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceName"></a>

```typescript
public readonly workforceName: string;
```

- *Type:* string

---

##### `workteamName`<sup>Required</sup> <a name="workteamName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamName"></a>

```typescript
public readonly workteamName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkteamConfig <a name="SagemakerWorkteamConfig" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

const sagemakerWorkteamConfig: sagemakerWorkteam.SagemakerWorkteamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.description">description</a></code> | <code>string</code> | A description of the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinitions">memberDefinitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>[]</code> | A list of MemberDefinition objects that contains objects that identify the workers that make up the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | Configures SNS notifications of available or expiring work items for work teams. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>[]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName">workforceName</a></code> | <code>string</code> | The name of the Workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName">workteamName</a></code> | <code>string</code> | The name of the work team. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}

---

##### `memberDefinitions`<sup>Required</sup> <a name="memberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinitions"></a>

```typescript
public readonly memberDefinitions: IResolvable | SagemakerWorkteamMemberDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>[]

A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#member_definitions SagemakerWorkteam#member_definitions}

---

##### `notificationConfiguration`<sup>Optional</sup> <a name="notificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: SagemakerWorkteamNotificationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

Configures SNS notifications of available or expiring work items for work teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerWorkteamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>[]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}

---

##### `workforceName`<sup>Optional</sup> <a name="workforceName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName"></a>

```typescript
public readonly workforceName: string;
```

- *Type:* string

The name of the Workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}

---

##### `workteamName`<sup>Optional</sup> <a name="workteamName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName"></a>

```typescript
public readonly workteamName: string;
```

- *Type:* string

The name of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}

---

### SagemakerWorkteamMemberDefinitions <a name="SagemakerWorkteamMemberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

const sagemakerWorkteamMemberDefinitions: sagemakerWorkteam.SagemakerWorkteamMemberDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.cognitoMemberDefinition">cognitoMemberDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a></code> | The Amazon Cognito user group that is part of the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.oidcMemberDefinition">oidcMemberDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a></code> | A list user groups that exist in your OIDC Identity Provider (IdP). |

---

##### `cognitoMemberDefinition`<sup>Optional</sup> <a name="cognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.cognitoMemberDefinition"></a>

```typescript
public readonly cognitoMemberDefinition: SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

The Amazon Cognito user group that is part of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_member_definition SagemakerWorkteam#cognito_member_definition}

---

##### `oidcMemberDefinition`<sup>Optional</sup> <a name="oidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.oidcMemberDefinition"></a>

```typescript
public readonly oidcMemberDefinition: SagemakerWorkteamMemberDefinitionsOidcMemberDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

A list user groups that exist in your OIDC Identity Provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#oidc_member_definition SagemakerWorkteam#oidc_member_definition}

---

### SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition <a name="SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

const sagemakerWorkteamMemberDefinitionsCognitoMemberDefinition: sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoClientId">cognitoClientId</a></code> | <code>string</code> | An identifier for an application client. You must create the app client ID using Amazon Cognito. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserGroup">cognitoUserGroup</a></code> | <code>string</code> | An identifier for a user group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserPool">cognitoUserPool</a></code> | <code>string</code> | An identifier for a user pool. |

---

##### `cognitoClientId`<sup>Optional</sup> <a name="cognitoClientId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoClientId"></a>

```typescript
public readonly cognitoClientId: string;
```

- *Type:* string

An identifier for an application client. You must create the app client ID using Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_client_id SagemakerWorkteam#cognito_client_id}

---

##### `cognitoUserGroup`<sup>Optional</sup> <a name="cognitoUserGroup" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserGroup"></a>

```typescript
public readonly cognitoUserGroup: string;
```

- *Type:* string

An identifier for a user group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_user_group SagemakerWorkteam#cognito_user_group}

---

##### `cognitoUserPool`<sup>Optional</sup> <a name="cognitoUserPool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserPool"></a>

```typescript
public readonly cognitoUserPool: string;
```

- *Type:* string

An identifier for a user pool.

The user pool must be in the same region as the service that you are calling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_user_pool SagemakerWorkteam#cognito_user_pool}

---

### SagemakerWorkteamMemberDefinitionsOidcMemberDefinition <a name="SagemakerWorkteamMemberDefinitionsOidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

const sagemakerWorkteamMemberDefinitionsOidcMemberDefinition: sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.property.oidcGroups">oidcGroups</a></code> | <code>string[]</code> | A list of OIDC group names whose members will be part of this workteam. |

---

##### `oidcGroups`<sup>Optional</sup> <a name="oidcGroups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.property.oidcGroups"></a>

```typescript
public readonly oidcGroups: string[];
```

- *Type:* string[]

A list of OIDC group names whose members will be part of this workteam.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#oidc_groups SagemakerWorkteam#oidc_groups}

---

### SagemakerWorkteamNotificationConfiguration <a name="SagemakerWorkteamNotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

const sagemakerWorkteamNotificationConfiguration: sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications should be published. |

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}

---

### SagemakerWorkteamTags <a name="SagemakerWorkteamTags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

const sagemakerWorkteamTags: sagemakerWorkteam.SagemakerWorkteamTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#key SagemakerWorkteam#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#value SagemakerWorkteam#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoClientId">resetCognitoClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserGroup">resetCognitoUserGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserPool">resetCognitoUserPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCognitoClientId` <a name="resetCognitoClientId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoClientId"></a>

```typescript
public resetCognitoClientId(): void
```

##### `resetCognitoUserGroup` <a name="resetCognitoUserGroup" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserGroup"></a>

```typescript
public resetCognitoUserGroup(): void
```

##### `resetCognitoUserPool` <a name="resetCognitoUserPool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserPool"></a>

```typescript
public resetCognitoUserPool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientIdInput">cognitoClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroupInput">cognitoUserGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPoolInput">cognitoUserPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientId">cognitoClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroup">cognitoUserGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPool">cognitoUserPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cognitoClientIdInput`<sup>Optional</sup> <a name="cognitoClientIdInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientIdInput"></a>

```typescript
public readonly cognitoClientIdInput: string;
```

- *Type:* string

---

##### `cognitoUserGroupInput`<sup>Optional</sup> <a name="cognitoUserGroupInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroupInput"></a>

```typescript
public readonly cognitoUserGroupInput: string;
```

- *Type:* string

---

##### `cognitoUserPoolInput`<sup>Optional</sup> <a name="cognitoUserPoolInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPoolInput"></a>

```typescript
public readonly cognitoUserPoolInput: string;
```

- *Type:* string

---

##### `cognitoClientId`<sup>Required</sup> <a name="cognitoClientId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientId"></a>

```typescript
public readonly cognitoClientId: string;
```

- *Type:* string

---

##### `cognitoUserGroup`<sup>Required</sup> <a name="cognitoUserGroup" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroup"></a>

```typescript
public readonly cognitoUserGroup: string;
```

- *Type:* string

---

##### `cognitoUserPool`<sup>Required</sup> <a name="cognitoUserPool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPool"></a>

```typescript
public readonly cognitoUserPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionsList <a name="SagemakerWorkteamMemberDefinitionsList" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get"></a>

```typescript
public get(index: number): SagemakerWorkteamMemberDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamMemberDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>[]

---


### SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resetOidcGroups">resetOidcGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOidcGroups` <a name="resetOidcGroups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resetOidcGroups"></a>

```typescript
public resetOidcGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroupsInput">oidcGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroups">oidcGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oidcGroupsInput`<sup>Optional</sup> <a name="oidcGroupsInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroupsInput"></a>

```typescript
public readonly oidcGroupsInput: string[];
```

- *Type:* string[]

---

##### `oidcGroups`<sup>Required</sup> <a name="oidcGroups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroups"></a>

```typescript
public readonly oidcGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamMemberDefinitionsOidcMemberDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionsOutputReference <a name="SagemakerWorkteamMemberDefinitionsOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition">putCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition">putOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetCognitoMemberDefinition">resetCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetOidcMemberDefinition">resetOidcMemberDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCognitoMemberDefinition` <a name="putCognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition"></a>

```typescript
public putCognitoMemberDefinition(value: SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

---

##### `putOidcMemberDefinition` <a name="putOidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition"></a>

```typescript
public putOidcMemberDefinition(value: SagemakerWorkteamMemberDefinitionsOidcMemberDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

---

##### `resetCognitoMemberDefinition` <a name="resetCognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetCognitoMemberDefinition"></a>

```typescript
public resetCognitoMemberDefinition(): void
```

##### `resetOidcMemberDefinition` <a name="resetOidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetOidcMemberDefinition"></a>

```typescript
public resetOidcMemberDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinition">cognitoMemberDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinition">oidcMemberDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinitionInput">cognitoMemberDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinitionInput">oidcMemberDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cognitoMemberDefinition`<sup>Required</sup> <a name="cognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinition"></a>

```typescript
public readonly cognitoMemberDefinition: SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference</a>

---

##### `oidcMemberDefinition`<sup>Required</sup> <a name="oidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinition"></a>

```typescript
public readonly oidcMemberDefinition: SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference</a>

---

##### `cognitoMemberDefinitionInput`<sup>Optional</sup> <a name="cognitoMemberDefinitionInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinitionInput"></a>

```typescript
public readonly cognitoMemberDefinitionInput: IResolvable | SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

---

##### `oidcMemberDefinitionInput`<sup>Optional</sup> <a name="oidcMemberDefinitionInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinitionInput"></a>

```typescript
public readonly oidcMemberDefinitionInput: IResolvable | SagemakerWorkteamMemberDefinitionsOidcMemberDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamMemberDefinitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>

---


### SagemakerWorkteamNotificationConfigurationOutputReference <a name="SagemakerWorkteamNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

new sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn"></a>

```typescript
public resetNotificationTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput"></a>

```typescript
public readonly notificationTopicArnInput: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamNotificationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---


### SagemakerWorkteamTagsList <a name="SagemakerWorkteamTagsList" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

new sagemakerWorkteam.SagemakerWorkteamTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get"></a>

```typescript
public get(index: number): SagemakerWorkteamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>[]

---


### SagemakerWorkteamTagsOutputReference <a name="SagemakerWorkteamTagsOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktn/provider-awscc'

new sagemakerWorkteam.SagemakerWorkteamTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>

---




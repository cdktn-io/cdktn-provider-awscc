# `resiliencehubApp` Submodule <a name="`resiliencehubApp` Submodule" id="@cdktn/provider-awscc.resiliencehubApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubApp <a name="ResiliencehubApp" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app awscc_resiliencehub_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

new resiliencehubApp.ResiliencehubApp(scope: Construct, id: string, config: ResiliencehubAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig">ResiliencehubAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig">ResiliencehubAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions">putEventSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel">putPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings">putResourceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule">resetAppAssessmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions">resetEventSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel">resetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn">resetResiliencyPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventSubscriptions` <a name="putEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions"></a>

```typescript
public putEventSubscriptions(value: IResolvable | ResiliencehubAppEventSubscriptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]

---

##### `putPermissionModel` <a name="putPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel"></a>

```typescript
public putPermissionModel(value: ResiliencehubAppPermissionModel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---

##### `putResourceMappings` <a name="putResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings"></a>

```typescript
public putResourceMappings(value: IResolvable | ResiliencehubAppResourceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]

---

##### `resetAppAssessmentSchedule` <a name="resetAppAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule"></a>

```typescript
public resetAppAssessmentSchedule(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEventSubscriptions` <a name="resetEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions"></a>

```typescript
public resetEventSubscriptions(): void
```

##### `resetPermissionModel` <a name="resetPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel"></a>

```typescript
public resetPermissionModel(): void
```

##### `resetResiliencyPolicyArn` <a name="resetResiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn"></a>

```typescript
public resetResiliencyPolicyArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

resiliencehubApp.ResiliencehubApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

resiliencehubApp.ResiliencehubApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

resiliencehubApp.ResiliencehubApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

resiliencehubApp.ResiliencehubApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResiliencehubApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResiliencehubApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResiliencehubApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn">appArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus">driftStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions">eventSubscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings">resourceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput">appAssessmentScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput">appTemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput">eventSubscriptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput">permissionModelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput">resiliencyPolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput">resourceMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule">appAssessmentSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody">appTemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn">resiliencyPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appArn`<sup>Required</sup> <a name="appArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn"></a>

```typescript
public readonly appArn: string;
```

- *Type:* string

---

##### `driftStatus`<sup>Required</sup> <a name="driftStatus" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus"></a>

```typescript
public readonly driftStatus: string;
```

- *Type:* string

---

##### `eventSubscriptions`<sup>Required</sup> <a name="eventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions"></a>

```typescript
public readonly eventSubscriptions: ResiliencehubAppEventSubscriptionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel"></a>

```typescript
public readonly permissionModel: ResiliencehubAppPermissionModelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a>

---

##### `resourceMappings`<sup>Required</sup> <a name="resourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings"></a>

```typescript
public readonly resourceMappings: ResiliencehubAppResourceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a>

---

##### `appAssessmentScheduleInput`<sup>Optional</sup> <a name="appAssessmentScheduleInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput"></a>

```typescript
public readonly appAssessmentScheduleInput: string;
```

- *Type:* string

---

##### `appTemplateBodyInput`<sup>Optional</sup> <a name="appTemplateBodyInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput"></a>

```typescript
public readonly appTemplateBodyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventSubscriptionsInput`<sup>Optional</sup> <a name="eventSubscriptionsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput"></a>

```typescript
public readonly eventSubscriptionsInput: IResolvable | ResiliencehubAppEventSubscriptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput"></a>

```typescript
public readonly permissionModelInput: IResolvable | ResiliencehubAppPermissionModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---

##### `resiliencyPolicyArnInput`<sup>Optional</sup> <a name="resiliencyPolicyArnInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput"></a>

```typescript
public readonly resiliencyPolicyArnInput: string;
```

- *Type:* string

---

##### `resourceMappingsInput`<sup>Optional</sup> <a name="resourceMappingsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput"></a>

```typescript
public readonly resourceMappingsInput: IResolvable | ResiliencehubAppResourceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `appAssessmentSchedule`<sup>Required</sup> <a name="appAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule"></a>

```typescript
public readonly appAssessmentSchedule: string;
```

- *Type:* string

---

##### `appTemplateBody`<sup>Required</sup> <a name="appTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody"></a>

```typescript
public readonly appTemplateBody: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resiliencyPolicyArn`<sup>Required</sup> <a name="resiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn"></a>

```typescript
public readonly resiliencyPolicyArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubAppConfig <a name="ResiliencehubAppConfig" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

const resiliencehubAppConfig: resiliencehubApp.ResiliencehubAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody">appTemplateBody</a></code> | <code>string</code> | A string containing full ResilienceHub app template body. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name">name</a></code> | <code>string</code> | Name of the app. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings">resourceMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]</code> | An array of ResourceMapping objects. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule">appAssessmentSchedule</a></code> | <code>string</code> | Assessment execution schedule. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description">description</a></code> | <code>string</code> | App description. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions">eventSubscriptions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]</code> | The list of events you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn">resiliencyPolicyArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appTemplateBody`<sup>Required</sup> <a name="appTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody"></a>

```typescript
public readonly appTemplateBody: string;
```

- *Type:* string

A string containing full ResilienceHub app template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#app_template_body ResiliencehubApp#app_template_body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `resourceMappings`<sup>Required</sup> <a name="resourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings"></a>

```typescript
public readonly resourceMappings: IResolvable | ResiliencehubAppResourceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]

An array of ResourceMapping objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#resource_mappings ResiliencehubApp#resource_mappings}

---

##### `appAssessmentSchedule`<sup>Optional</sup> <a name="appAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule"></a>

```typescript
public readonly appAssessmentSchedule: string;
```

- *Type:* string

Assessment execution schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#app_assessment_schedule ResiliencehubApp#app_assessment_schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

App description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#description ResiliencehubApp#description}

---

##### `eventSubscriptions`<sup>Optional</sup> <a name="eventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions"></a>

```typescript
public readonly eventSubscriptions: IResolvable | ResiliencehubAppEventSubscriptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]

The list of events you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#event_subscriptions ResiliencehubApp#event_subscriptions}

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel"></a>

```typescript
public readonly permissionModel: ResiliencehubAppPermissionModel;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#permission_model ResiliencehubApp#permission_model}

---

##### `resiliencyPolicyArn`<sup>Optional</sup> <a name="resiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn"></a>

```typescript
public readonly resiliencyPolicyArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of the Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#resiliency_policy_arn ResiliencehubApp#resiliency_policy_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}.

---

### ResiliencehubAppEventSubscriptions <a name="ResiliencehubAppEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

const resiliencehubAppEventSubscriptions: resiliencehubApp.ResiliencehubAppEventSubscriptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType">eventType</a></code> | <code>string</code> | The type of event you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name">name</a></code> | <code>string</code> | Unique name to identify an event subscription. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic. |

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

The type of event you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#event_type ResiliencehubApp#event_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name to identify an event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#sns_topic_arn ResiliencehubApp#sns_topic_arn}

---

### ResiliencehubAppPermissionModel <a name="ResiliencehubAppPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

const resiliencehubAppPermissionModel: resiliencehubApp.ResiliencehubAppPermissionModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code>string[]</code> | Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName">invokerRoleName</a></code> | <code>string</code> | Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type">type</a></code> | <code>string</code> | Defines how AWS Resilience Hub scans your resources. |

---

##### `crossAccountRoleArns`<sup>Optional</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns"></a>

```typescript
public readonly crossAccountRoleArns: string[];
```

- *Type:* string[]

Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts.

These ARNs are used for querying purposes while importing resources and assessing your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#cross_account_role_arns ResiliencehubApp#cross_account_role_arns}

---

##### `invokerRoleName`<sup>Optional</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName"></a>

```typescript
public readonly invokerRoleName: string;
```

- *Type:* string

Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#invoker_role_name ResiliencehubApp#invoker_role_name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Defines how AWS Resilience Hub scans your resources.

It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}

---

### ResiliencehubAppResourceMappings <a name="ResiliencehubAppResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

const resiliencehubAppResourceMappings: resiliencehubApp.ResiliencehubAppResourceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType">mappingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId">physicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName">eksSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName">logicalStackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName">terraformSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}. |

---

##### `mappingType`<sup>Required</sup> <a name="mappingType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType"></a>

```typescript
public readonly mappingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}.

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: ResiliencehubAppResourceMappingsPhysicalResourceId;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}.

---

##### `eksSourceName`<sup>Optional</sup> <a name="eksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName"></a>

```typescript
public readonly eksSourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}.

---

##### `logicalStackName`<sup>Optional</sup> <a name="logicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName"></a>

```typescript
public readonly logicalStackName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}.

---

##### `terraformSourceName`<sup>Optional</sup> <a name="terraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName"></a>

```typescript
public readonly terraformSourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}.

---

### ResiliencehubAppResourceMappingsPhysicalResourceId <a name="ResiliencehubAppResourceMappingsPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

const resiliencehubAppResourceMappingsPhysicalResourceId: resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubAppEventSubscriptionsList <a name="ResiliencehubAppEventSubscriptionsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

new resiliencehubApp.ResiliencehubAppEventSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get"></a>

```typescript
public get(index: number): ResiliencehubAppEventSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResiliencehubAppEventSubscriptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]

---


### ResiliencehubAppEventSubscriptionsOutputReference <a name="ResiliencehubAppEventSubscriptionsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

new resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventType` <a name="resetEventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType"></a>

```typescript
public resetEventType(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResiliencehubAppEventSubscriptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>

---


### ResiliencehubAppPermissionModelOutputReference <a name="ResiliencehubAppPermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

new resiliencehubApp.ResiliencehubAppPermissionModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns">resetCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName">resetInvokerRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrossAccountRoleArns` <a name="resetCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```typescript
public resetCrossAccountRoleArns(): void
```

##### `resetInvokerRoleName` <a name="resetInvokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName"></a>

```typescript
public resetInvokerRoleName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput">crossAccountRoleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput">invokerRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName">invokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRoleArnsInput`<sup>Optional</sup> <a name="crossAccountRoleArnsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```typescript
public readonly crossAccountRoleArnsInput: string[];
```

- *Type:* string[]

---

##### `invokerRoleNameInput`<sup>Optional</sup> <a name="invokerRoleNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput"></a>

```typescript
public readonly invokerRoleNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `crossAccountRoleArns`<sup>Required</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns"></a>

```typescript
public readonly crossAccountRoleArns: string[];
```

- *Type:* string[]

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName"></a>

```typescript
public readonly invokerRoleName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResiliencehubAppPermissionModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---


### ResiliencehubAppResourceMappingsList <a name="ResiliencehubAppResourceMappingsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

new resiliencehubApp.ResiliencehubAppResourceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get"></a>

```typescript
public get(index: number): ResiliencehubAppResourceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResiliencehubAppResourceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]

---


### ResiliencehubAppResourceMappingsOutputReference <a name="ResiliencehubAppResourceMappingsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

new resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId">putPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName">resetEksSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName">resetLogicalStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName">resetTerraformSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPhysicalResourceId` <a name="putPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId"></a>

```typescript
public putPhysicalResourceId(value: ResiliencehubAppResourceMappingsPhysicalResourceId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---

##### `resetEksSourceName` <a name="resetEksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName"></a>

```typescript
public resetEksSourceName(): void
```

##### `resetLogicalStackName` <a name="resetLogicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName"></a>

```typescript
public resetLogicalStackName(): void
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetTerraformSourceName` <a name="resetTerraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName"></a>

```typescript
public resetTerraformSourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId">physicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput">eksSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput">logicalStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput">mappingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput">physicalResourceIdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput">terraformSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName">eksSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName">logicalStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType">mappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName">terraformSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a>

---

##### `eksSourceNameInput`<sup>Optional</sup> <a name="eksSourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput"></a>

```typescript
public readonly eksSourceNameInput: string;
```

- *Type:* string

---

##### `logicalStackNameInput`<sup>Optional</sup> <a name="logicalStackNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput"></a>

```typescript
public readonly logicalStackNameInput: string;
```

- *Type:* string

---

##### `mappingTypeInput`<sup>Optional</sup> <a name="mappingTypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput"></a>

```typescript
public readonly mappingTypeInput: string;
```

- *Type:* string

---

##### `physicalResourceIdInput`<sup>Optional</sup> <a name="physicalResourceIdInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput"></a>

```typescript
public readonly physicalResourceIdInput: IResolvable | ResiliencehubAppResourceMappingsPhysicalResourceId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `terraformSourceNameInput`<sup>Optional</sup> <a name="terraformSourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput"></a>

```typescript
public readonly terraformSourceNameInput: string;
```

- *Type:* string

---

##### `eksSourceName`<sup>Required</sup> <a name="eksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName"></a>

```typescript
public readonly eksSourceName: string;
```

- *Type:* string

---

##### `logicalStackName`<sup>Required</sup> <a name="logicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName"></a>

```typescript
public readonly logicalStackName: string;
```

- *Type:* string

---

##### `mappingType`<sup>Required</sup> <a name="mappingType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType"></a>

```typescript
public readonly mappingType: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `terraformSourceName`<sup>Required</sup> <a name="terraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName"></a>

```typescript
public readonly terraformSourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResiliencehubAppResourceMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>

---


### ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference <a name="ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer"></a>

```typescript
import { resiliencehubApp } from '@cdktn/provider-awscc'

new resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResiliencehubAppResourceMappingsPhysicalResourceId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---




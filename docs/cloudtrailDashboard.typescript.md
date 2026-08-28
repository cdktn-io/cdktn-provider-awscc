# `cloudtrailDashboard` Submodule <a name="`cloudtrailDashboard` Submodule" id="@cdktn/provider-awscc.cloudtrailDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailDashboard <a name="CloudtrailDashboard" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard awscc_cloudtrail_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

new cloudtrailDashboard.CloudtrailDashboard(scope: Construct, id: string, config?: CloudtrailDashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig">CloudtrailDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig">CloudtrailDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putRefreshSchedule">putRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putWidgets">putWidgets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetRefreshSchedule">resetRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetTerminationProtectionEnabled">resetTerminationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetWidgets">resetWidgets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRefreshSchedule` <a name="putRefreshSchedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putRefreshSchedule"></a>

```typescript
public putRefreshSchedule(value: CloudtrailDashboardRefreshSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putRefreshSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudtrailDashboardTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>[]

---

##### `putWidgets` <a name="putWidgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putWidgets"></a>

```typescript
public putWidgets(value: IResolvable | CloudtrailDashboardWidgets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putWidgets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>[]

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRefreshSchedule` <a name="resetRefreshSchedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetRefreshSchedule"></a>

```typescript
public resetRefreshSchedule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetTerminationProtectionEnabled"></a>

```typescript
public resetTerminationProtectionEnabled(): void
```

##### `resetWidgets` <a name="resetWidgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetWidgets"></a>

```typescript
public resetWidgets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudtrailDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isConstruct"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

cloudtrailDashboard.CloudtrailDashboard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformElement"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

cloudtrailDashboard.CloudtrailDashboard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformResource"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

cloudtrailDashboard.CloudtrailDashboard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudtrailDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudtrailDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudtrailDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.dashboardArn">dashboardArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.refreshSchedule">refreshSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference">CloudtrailDashboardRefreshScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList">CloudtrailDashboardTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.widgets">widgets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList">CloudtrailDashboardWidgetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.refreshScheduleInput">refreshScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.widgetsInput">widgetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.dashboardArn"></a>

```typescript
public readonly dashboardArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `refreshSchedule`<sup>Required</sup> <a name="refreshSchedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.refreshSchedule"></a>

```typescript
public readonly refreshSchedule: CloudtrailDashboardRefreshScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference">CloudtrailDashboardRefreshScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tags"></a>

```typescript
public readonly tags: CloudtrailDashboardTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList">CloudtrailDashboardTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `widgets`<sup>Required</sup> <a name="widgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.widgets"></a>

```typescript
public readonly widgets: CloudtrailDashboardWidgetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList">CloudtrailDashboardWidgetsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `refreshScheduleInput`<sup>Optional</sup> <a name="refreshScheduleInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.refreshScheduleInput"></a>

```typescript
public readonly refreshScheduleInput: IResolvable | CloudtrailDashboardRefreshSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudtrailDashboardTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>[]

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terminationProtectionEnabledInput"></a>

```typescript
public readonly terminationProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `widgetsInput`<sup>Optional</sup> <a name="widgetsInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.widgetsInput"></a>

```typescript
public readonly widgetsInput: IResolvable | CloudtrailDashboardWidgets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailDashboardConfig <a name="CloudtrailDashboardConfig" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

const cloudtrailDashboardConfig: cloudtrailDashboard.CloudtrailDashboardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.name">name</a></code> | <code>string</code> | The name of the dashboard. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.refreshSchedule">refreshSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a></code> | Configures the automatic refresh schedule for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#tags CloudtrailDashboard#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the dashboard is protected from termination. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.widgets">widgets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>[]</code> | List of widgets on the dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#name CloudtrailDashboard#name}

---

##### `refreshSchedule`<sup>Optional</sup> <a name="refreshSchedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.refreshSchedule"></a>

```typescript
public readonly refreshSchedule: CloudtrailDashboardRefreshSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a>

Configures the automatic refresh schedule for the dashboard.

Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#refresh_schedule CloudtrailDashboard#refresh_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudtrailDashboardTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#tags CloudtrailDashboard#tags}.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the dashboard is protected from termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#termination_protection_enabled CloudtrailDashboard#termination_protection_enabled}

---

##### `widgets`<sup>Optional</sup> <a name="widgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.widgets"></a>

```typescript
public readonly widgets: IResolvable | CloudtrailDashboardWidgets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>[]

List of widgets on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#widgets CloudtrailDashboard#widgets}

---

### CloudtrailDashboardRefreshSchedule <a name="CloudtrailDashboardRefreshSchedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

const cloudtrailDashboardRefreshSchedule: cloudtrailDashboard.CloudtrailDashboardRefreshSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.frequency">frequency</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#frequency CloudtrailDashboard#frequency}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.status">status</a></code> | <code>string</code> | The status of the schedule. Supported values are ENABLED and DISABLED. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | StartTime of the automatic schedule refresh. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.frequency"></a>

```typescript
public readonly frequency: CloudtrailDashboardRefreshScheduleFrequency;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#frequency CloudtrailDashboard#frequency}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the schedule. Supported values are ENABLED and DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#status CloudtrailDashboard#status}

---

##### `timeOfDay`<sup>Optional</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

StartTime of the automatic schedule refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#time_of_day CloudtrailDashboard#time_of_day}

---

### CloudtrailDashboardRefreshScheduleFrequency <a name="CloudtrailDashboardRefreshScheduleFrequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

const cloudtrailDashboardRefreshScheduleFrequency: cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.property.unit">unit</a></code> | <code>string</code> | The frequency unit. Supported values are HOURS and DAYS. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.property.value">value</a></code> | <code>number</code> | The frequency value. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The frequency unit. Supported values are HOURS and DAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#unit CloudtrailDashboard#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The frequency value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#value CloudtrailDashboard#value}

---

### CloudtrailDashboardTags <a name="CloudtrailDashboardTags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

const cloudtrailDashboardTags: cloudtrailDashboard.CloudtrailDashboardTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#key CloudtrailDashboard#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#value CloudtrailDashboard#value}

---

### CloudtrailDashboardWidgets <a name="CloudtrailDashboardWidgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

const cloudtrailDashboardWidgets: cloudtrailDashboard.CloudtrailDashboardWidgets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.queryParameters">queryParameters</a></code> | <code>string[]</code> | The placeholder keys in the QueryStatement. For example: $StartTime$, $EndTime$, $Period$. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.queryStatement">queryStatement</a></code> | <code>string</code> | The SQL query statement on one or more event data stores. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.viewProperties">viewProperties</a></code> | <code>{[ key: string ]: string}</code> | The view properties of the widget. |

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.queryParameters"></a>

```typescript
public readonly queryParameters: string[];
```

- *Type:* string[]

The placeholder keys in the QueryStatement. For example: $StartTime$, $EndTime$, $Period$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#query_parameters CloudtrailDashboard#query_parameters}

---

##### `queryStatement`<sup>Optional</sup> <a name="queryStatement" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.queryStatement"></a>

```typescript
public readonly queryStatement: string;
```

- *Type:* string

The SQL query statement on one or more event data stores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#query_statement CloudtrailDashboard#query_statement}

---

##### `viewProperties`<sup>Optional</sup> <a name="viewProperties" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.viewProperties"></a>

```typescript
public readonly viewProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The view properties of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_dashboard#view_properties CloudtrailDashboard#view_properties}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailDashboardRefreshScheduleFrequencyOutputReference <a name="CloudtrailDashboardRefreshScheduleFrequencyOutputReference" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

new cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailDashboardRefreshScheduleFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a>

---


### CloudtrailDashboardRefreshScheduleOutputReference <a name="CloudtrailDashboardRefreshScheduleOutputReference" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

new cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.putFrequency">putFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetTimeOfDay">resetTimeOfDay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrequency` <a name="putFrequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.putFrequency"></a>

```typescript
public putFrequency(value: CloudtrailDashboardRefreshScheduleFrequency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.putFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a>

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeOfDay` <a name="resetTimeOfDay" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetTimeOfDay"></a>

```typescript
public resetTimeOfDay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.frequency">frequency</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference">CloudtrailDashboardRefreshScheduleFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.frequency"></a>

```typescript
public readonly frequency: CloudtrailDashboardRefreshScheduleFrequencyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference">CloudtrailDashboardRefreshScheduleFrequencyOutputReference</a>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: IResolvable | CloudtrailDashboardRefreshScheduleFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.timeOfDayInput"></a>

```typescript
public readonly timeOfDayInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailDashboardRefreshSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a>

---


### CloudtrailDashboardTagsList <a name="CloudtrailDashboardTagsList" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

new cloudtrailDashboard.CloudtrailDashboardTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.get"></a>

```typescript
public get(index: number): CloudtrailDashboardTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailDashboardTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>[]

---


### CloudtrailDashboardTagsOutputReference <a name="CloudtrailDashboardTagsOutputReference" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

new cloudtrailDashboard.CloudtrailDashboardTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailDashboardTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>

---


### CloudtrailDashboardWidgetsList <a name="CloudtrailDashboardWidgetsList" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

new cloudtrailDashboard.CloudtrailDashboardWidgetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.get"></a>

```typescript
public get(index: number): CloudtrailDashboardWidgetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailDashboardWidgets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>[]

---


### CloudtrailDashboardWidgetsOutputReference <a name="CloudtrailDashboardWidgetsOutputReference" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer"></a>

```typescript
import { cloudtrailDashboard } from '@cdktn/provider-awscc'

new cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetQueryStatement">resetQueryStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetViewProperties">resetViewProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetQueryParameters"></a>

```typescript
public resetQueryParameters(): void
```

##### `resetQueryStatement` <a name="resetQueryStatement" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetQueryStatement"></a>

```typescript
public resetQueryStatement(): void
```

##### `resetViewProperties` <a name="resetViewProperties" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetViewProperties"></a>

```typescript
public resetViewProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryParametersInput">queryParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryStatementInput">queryStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.viewPropertiesInput">viewPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryParameters">queryParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryStatement">queryStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.viewProperties">viewProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryParametersInput"></a>

```typescript
public readonly queryParametersInput: string[];
```

- *Type:* string[]

---

##### `queryStatementInput`<sup>Optional</sup> <a name="queryStatementInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryStatementInput"></a>

```typescript
public readonly queryStatementInput: string;
```

- *Type:* string

---

##### `viewPropertiesInput`<sup>Optional</sup> <a name="viewPropertiesInput" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.viewPropertiesInput"></a>

```typescript
public readonly viewPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryParameters"></a>

```typescript
public readonly queryParameters: string[];
```

- *Type:* string[]

---

##### `queryStatement`<sup>Required</sup> <a name="queryStatement" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryStatement"></a>

```typescript
public readonly queryStatement: string;
```

- *Type:* string

---

##### `viewProperties`<sup>Required</sup> <a name="viewProperties" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.viewProperties"></a>

```typescript
public readonly viewProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailDashboardWidgets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>

---




# `cloudwatchDashboard` Submodule <a name="`cloudwatchDashboard` Submodule" id="@cdktn/provider-awscc.cloudwatchDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchDashboard <a name="CloudwatchDashboard" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_dashboard awscc_cloudwatch_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.Initializer"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

new cloudwatchDashboard.CloudwatchDashboard(scope: Construct, id: string, config: CloudwatchDashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig">CloudwatchDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig">CloudwatchDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.resetDashboardName">resetDashboardName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchDashboardTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a>[]

---

##### `resetDashboardName` <a name="resetDashboardName" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.resetDashboardName"></a>

```typescript
public resetDashboardName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isConstruct"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

cloudwatchDashboard.CloudwatchDashboard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isTerraformElement"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

cloudwatchDashboard.CloudwatchDashboard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isTerraformResource"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

cloudwatchDashboard.CloudwatchDashboard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.generateConfigForImport"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

cloudwatchDashboard.CloudwatchDashboard.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList">CloudwatchDashboardTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dashboardBodyInput">dashboardBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dashboardNameInput">dashboardNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dashboardBody">dashboardBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dashboardName">dashboardName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.tags"></a>

```typescript
public readonly tags: CloudwatchDashboardTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList">CloudwatchDashboardTagsList</a>

---

##### `dashboardBodyInput`<sup>Optional</sup> <a name="dashboardBodyInput" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dashboardBodyInput"></a>

```typescript
public readonly dashboardBodyInput: string;
```

- *Type:* string

---

##### `dashboardNameInput`<sup>Optional</sup> <a name="dashboardNameInput" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dashboardNameInput"></a>

```typescript
public readonly dashboardNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchDashboardTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a>[]

---

##### `dashboardBody`<sup>Required</sup> <a name="dashboardBody" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dashboardBody"></a>

```typescript
public readonly dashboardBody: string;
```

- *Type:* string

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchDashboardConfig <a name="CloudwatchDashboardConfig" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.Initializer"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

const cloudwatchDashboardConfig: cloudwatchDashboard.CloudwatchDashboardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.dashboardBody">dashboardBody</a></code> | <code>string</code> | The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.dashboardName">dashboardName</a></code> | <code>string</code> | The name of the dashboard. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a>[]</code> | A list of key-value pairs to associate with the cloudwatch dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dashboardBody`<sup>Required</sup> <a name="dashboardBody" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.dashboardBody"></a>

```typescript
public readonly dashboardBody: string;
```

- *Type:* string

The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_dashboard#dashboard_body CloudwatchDashboard#dashboard_body}

---

##### `dashboardName`<sup>Optional</sup> <a name="dashboardName" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The name of the dashboard.

The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_dashboard#dashboard_name CloudwatchDashboard#dashboard_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchDashboardTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a>[]

A list of key-value pairs to associate with the cloudwatch dashboard.

You can associate up to 50 tags with a dashboard

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_dashboard#tags CloudwatchDashboard#tags}

---

### CloudwatchDashboardTags <a name="CloudwatchDashboardTags" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags.Initializer"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

const cloudwatchDashboardTags: cloudwatchDashboard.CloudwatchDashboardTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags.property.key">key</a></code> | <code>string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_dashboard#key CloudwatchDashboard#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_dashboard#value CloudwatchDashboard#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchDashboardTagsList <a name="CloudwatchDashboardTagsList" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.Initializer"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

new cloudwatchDashboard.CloudwatchDashboardTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.get"></a>

```typescript
public get(index: number): CloudwatchDashboardTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDashboardTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a>[]

---


### CloudwatchDashboardTagsOutputReference <a name="CloudwatchDashboardTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchDashboard } from '@cdktn/provider-awscc'

new cloudwatchDashboard.CloudwatchDashboardTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDashboardTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDashboard.CloudwatchDashboardTags">CloudwatchDashboardTags</a>

---




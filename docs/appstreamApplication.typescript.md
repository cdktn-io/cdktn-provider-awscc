# `appstreamApplication` Submodule <a name="`appstreamApplication` Submodule" id="@cdktn/provider-awscc.appstreamApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamApplication <a name="AppstreamApplication" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application awscc_appstream_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

new appstreamApplication.AppstreamApplication(scope: Construct, id: string, config: AppstreamApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig">AppstreamApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig">AppstreamApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putIconS3Location">putIconS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetAttributesToDelete">resetAttributesToDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetLaunchParameters">resetLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIconS3Location` <a name="putIconS3Location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putIconS3Location"></a>

```typescript
public putIconS3Location(value: AppstreamApplicationIconS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putIconS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putTags"></a>

```typescript
public putTags(value: IResolvable | AppstreamApplicationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>[]

---

##### `resetAttributesToDelete` <a name="resetAttributesToDelete" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetAttributesToDelete"></a>

```typescript
public resetAttributesToDelete(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetLaunchParameters` <a name="resetLaunchParameters" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetLaunchParameters"></a>

```typescript
public resetLaunchParameters(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isConstruct"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

appstreamApplication.AppstreamApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformElement"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

appstreamApplication.AppstreamApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformResource"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

appstreamApplication.AppstreamApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

appstreamApplication.AppstreamApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.iconS3Location">iconS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference">AppstreamApplicationIconS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList">AppstreamApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.appBlockArnInput">appBlockArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.attributesToDeleteInput">attributesToDeleteInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.iconS3LocationInput">iconS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.instanceFamiliesInput">instanceFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchParametersInput">launchParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchPathInput">launchPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.platformsInput">platformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.appBlockArn">appBlockArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.attributesToDelete">attributesToDelete</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.instanceFamilies">instanceFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchParameters">launchParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchPath">launchPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.platforms">platforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `iconS3Location`<sup>Required</sup> <a name="iconS3Location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.iconS3Location"></a>

```typescript
public readonly iconS3Location: AppstreamApplicationIconS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference">AppstreamApplicationIconS3LocationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tags"></a>

```typescript
public readonly tags: AppstreamApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList">AppstreamApplicationTagsList</a>

---

##### `appBlockArnInput`<sup>Optional</sup> <a name="appBlockArnInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.appBlockArnInput"></a>

```typescript
public readonly appBlockArnInput: string;
```

- *Type:* string

---

##### `attributesToDeleteInput`<sup>Optional</sup> <a name="attributesToDeleteInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.attributesToDeleteInput"></a>

```typescript
public readonly attributesToDeleteInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `iconS3LocationInput`<sup>Optional</sup> <a name="iconS3LocationInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.iconS3LocationInput"></a>

```typescript
public readonly iconS3LocationInput: IResolvable | AppstreamApplicationIconS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a>

---

##### `instanceFamiliesInput`<sup>Optional</sup> <a name="instanceFamiliesInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.instanceFamiliesInput"></a>

```typescript
public readonly instanceFamiliesInput: string[];
```

- *Type:* string[]

---

##### `launchParametersInput`<sup>Optional</sup> <a name="launchParametersInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchParametersInput"></a>

```typescript
public readonly launchParametersInput: string;
```

- *Type:* string

---

##### `launchPathInput`<sup>Optional</sup> <a name="launchPathInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchPathInput"></a>

```typescript
public readonly launchPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformsInput`<sup>Optional</sup> <a name="platformsInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.platformsInput"></a>

```typescript
public readonly platformsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppstreamApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>[]

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `appBlockArn`<sup>Required</sup> <a name="appBlockArn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.appBlockArn"></a>

```typescript
public readonly appBlockArn: string;
```

- *Type:* string

---

##### `attributesToDelete`<sup>Required</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.attributesToDelete"></a>

```typescript
public readonly attributesToDelete: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `instanceFamilies`<sup>Required</sup> <a name="instanceFamilies" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.instanceFamilies"></a>

```typescript
public readonly instanceFamilies: string[];
```

- *Type:* string[]

---

##### `launchParameters`<sup>Required</sup> <a name="launchParameters" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchParameters"></a>

```typescript
public readonly launchParameters: string;
```

- *Type:* string

---

##### `launchPath`<sup>Required</sup> <a name="launchPath" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchPath"></a>

```typescript
public readonly launchPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.platforms"></a>

```typescript
public readonly platforms: string[];
```

- *Type:* string[]

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamApplicationConfig <a name="AppstreamApplicationConfig" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.Initializer"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

const appstreamApplicationConfig: appstreamApplication.AppstreamApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.appBlockArn">appBlockArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#app_block_arn AppstreamApplication#app_block_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.iconS3Location">iconS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#icon_s3_location AppstreamApplication#icon_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.instanceFamilies">instanceFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#instance_families AppstreamApplication#instance_families}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.launchPath">launchPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#launch_path AppstreamApplication#launch_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#name AppstreamApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.platforms">platforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#platforms AppstreamApplication#platforms}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.attributesToDelete">attributesToDelete</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#attributes_to_delete AppstreamApplication#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#description AppstreamApplication#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#display_name AppstreamApplication#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.launchParameters">launchParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#launch_parameters AppstreamApplication#launch_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#tags AppstreamApplication#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#working_directory AppstreamApplication#working_directory}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appBlockArn`<sup>Required</sup> <a name="appBlockArn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.appBlockArn"></a>

```typescript
public readonly appBlockArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#app_block_arn AppstreamApplication#app_block_arn}.

---

##### `iconS3Location`<sup>Required</sup> <a name="iconS3Location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.iconS3Location"></a>

```typescript
public readonly iconS3Location: AppstreamApplicationIconS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#icon_s3_location AppstreamApplication#icon_s3_location}.

---

##### `instanceFamilies`<sup>Required</sup> <a name="instanceFamilies" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.instanceFamilies"></a>

```typescript
public readonly instanceFamilies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#instance_families AppstreamApplication#instance_families}.

---

##### `launchPath`<sup>Required</sup> <a name="launchPath" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.launchPath"></a>

```typescript
public readonly launchPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#launch_path AppstreamApplication#launch_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#name AppstreamApplication#name}.

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.platforms"></a>

```typescript
public readonly platforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#platforms AppstreamApplication#platforms}.

---

##### `attributesToDelete`<sup>Optional</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.attributesToDelete"></a>

```typescript
public readonly attributesToDelete: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#attributes_to_delete AppstreamApplication#attributes_to_delete}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#description AppstreamApplication#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#display_name AppstreamApplication#display_name}.

---

##### `launchParameters`<sup>Optional</sup> <a name="launchParameters" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.launchParameters"></a>

```typescript
public readonly launchParameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#launch_parameters AppstreamApplication#launch_parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppstreamApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#tags AppstreamApplication#tags}.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#working_directory AppstreamApplication#working_directory}.

---

### AppstreamApplicationIconS3Location <a name="AppstreamApplicationIconS3Location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.Initializer"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

const appstreamApplicationIconS3Location: appstreamApplication.AppstreamApplicationIconS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#s3_bucket AppstreamApplication#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#s3_key AppstreamApplication#s3_key}. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#s3_bucket AppstreamApplication#s3_bucket}.

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#s3_key AppstreamApplication#s3_key}.

---

### AppstreamApplicationTags <a name="AppstreamApplicationTags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.Initializer"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

const appstreamApplicationTags: appstreamApplication.AppstreamApplicationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#key AppstreamApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#tag_key AppstreamApplication#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#tag_value AppstreamApplication#tag_value}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#value AppstreamApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#key AppstreamApplication#key}.

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#tag_key AppstreamApplication#tag_key}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#tag_value AppstreamApplication#tag_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application#value AppstreamApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamApplicationIconS3LocationOutputReference <a name="AppstreamApplicationIconS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

new appstreamApplication.AppstreamApplicationIconS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamApplicationIconS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a>

---


### AppstreamApplicationTagsList <a name="AppstreamApplicationTagsList" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

new appstreamApplication.AppstreamApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.get"></a>

```typescript
public get(index: number): AppstreamApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>[]

---


### AppstreamApplicationTagsOutputReference <a name="AppstreamApplicationTagsOutputReference" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer"></a>

```typescript
import { appstreamApplication } from '@cdktn/provider-awscc'

new appstreamApplication.AppstreamApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamApplicationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>

---




# `appconfigEnvironment` Submodule <a name="`appconfigEnvironment` Submodule" id="@cdktn/provider-awscc.appconfigEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigEnvironment <a name="AppconfigEnvironment" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment awscc_appconfig_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

new appconfigEnvironment.AppconfigEnvironment(scope: Construct, id: string, config: AppconfigEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig">AppconfigEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig">AppconfigEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putMonitors">putMonitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetDeletionProtectionCheck">resetDeletionProtectionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetMonitors">resetMonitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonitors` <a name="putMonitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putMonitors"></a>

```typescript
public putMonitors(value: IResolvable | AppconfigEnvironmentMonitors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putMonitors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putTags"></a>

```typescript
public putTags(value: IResolvable | AppconfigEnvironmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]

---

##### `resetDeletionProtectionCheck` <a name="resetDeletionProtectionCheck" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetDeletionProtectionCheck"></a>

```typescript
public resetDeletionProtectionCheck(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMonitors` <a name="resetMonitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetMonitors"></a>

```typescript
public resetMonitors(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isConstruct"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

appconfigEnvironment.AppconfigEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformElement"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

appconfigEnvironment.AppconfigEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformResource"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

appconfigEnvironment.AppconfigEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

appconfigEnvironment.AppconfigEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppconfigEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.monitors">monitors</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList">AppconfigEnvironmentMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList">AppconfigEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.deletionProtectionCheckInput">deletionProtectionCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.monitorsInput">monitorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.deletionProtectionCheck">deletionProtectionCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.monitors"></a>

```typescript
public readonly monitors: AppconfigEnvironmentMonitorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList">AppconfigEnvironmentMonitorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tags"></a>

```typescript
public readonly tags: AppconfigEnvironmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList">AppconfigEnvironmentTagsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `deletionProtectionCheckInput`<sup>Optional</sup> <a name="deletionProtectionCheckInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.deletionProtectionCheckInput"></a>

```typescript
public readonly deletionProtectionCheckInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `monitorsInput`<sup>Optional</sup> <a name="monitorsInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.monitorsInput"></a>

```typescript
public readonly monitorsInput: IResolvable | AppconfigEnvironmentMonitors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppconfigEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `deletionProtectionCheck`<sup>Required</sup> <a name="deletionProtectionCheck" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.deletionProtectionCheck"></a>

```typescript
public readonly deletionProtectionCheck: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigEnvironmentConfig <a name="AppconfigEnvironmentConfig" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

const appconfigEnvironmentConfig: appconfigEnvironment.AppconfigEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.name">name</a></code> | <code>string</code> | A name for the environment. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.deletionProtectionCheck">deletionProtectionCheck</a></code> | <code>string</code> | On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.description">description</a></code> | <code>string</code> | A description of the environment. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitors">monitors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]</code> | Amazon CloudWatch alarms to monitor during the deployment process. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]</code> | Metadata to assign to the environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#application_id AppconfigEnvironment#application_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#name AppconfigEnvironment#name}

---

##### `deletionProtectionCheck`<sup>Optional</sup> <a name="deletionProtectionCheck" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.deletionProtectionCheck"></a>

```typescript
public readonly deletionProtectionCheck: string;
```

- *Type:* string

On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.

See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#deletion_protection_check AppconfigEnvironment#deletion_protection_check}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#description AppconfigEnvironment#description}

---

##### `monitors`<sup>Optional</sup> <a name="monitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitors"></a>

```typescript
public readonly monitors: IResolvable | AppconfigEnvironmentMonitors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]

Amazon CloudWatch alarms to monitor during the deployment process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#monitors AppconfigEnvironment#monitors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppconfigEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]

Metadata to assign to the environment.

Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#tags AppconfigEnvironment#tags}

---

### AppconfigEnvironmentMonitors <a name="AppconfigEnvironmentMonitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

const appconfigEnvironmentMonitors: appconfigEnvironment.AppconfigEnvironmentMonitors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.property.alarmArn">alarmArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the Amazon CloudWatch alarm. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.property.alarmRoleArn">alarmRoleArn</a></code> | <code>string</code> | ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn. |

---

##### `alarmArn`<sup>Optional</sup> <a name="alarmArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.property.alarmArn"></a>

```typescript
public readonly alarmArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}

---

##### `alarmRoleArn`<sup>Optional</sup> <a name="alarmRoleArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.property.alarmRoleArn"></a>

```typescript
public readonly alarmRoleArn: string;
```

- *Type:* string

ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}

---

### AppconfigEnvironmentTags <a name="AppconfigEnvironmentTags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

const appconfigEnvironmentTags: appconfigEnvironment.AppconfigEnvironmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.property.key">key</a></code> | <code>string</code> | The key-value string map. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.property.value">value</a></code> | <code>string</code> | The tag value can be up to 256 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key-value string map.

The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#key AppconfigEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value can be up to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_environment#value AppconfigEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigEnvironmentMonitorsList <a name="AppconfigEnvironmentMonitorsList" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

new appconfigEnvironment.AppconfigEnvironmentMonitorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.get"></a>

```typescript
public get(index: number): AppconfigEnvironmentMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigEnvironmentMonitors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]

---


### AppconfigEnvironmentMonitorsOutputReference <a name="AppconfigEnvironmentMonitorsOutputReference" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

new appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resetAlarmArn">resetAlarmArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resetAlarmRoleArn">resetAlarmRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmArn` <a name="resetAlarmArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resetAlarmArn"></a>

```typescript
public resetAlarmArn(): void
```

##### `resetAlarmRoleArn` <a name="resetAlarmRoleArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resetAlarmRoleArn"></a>

```typescript
public resetAlarmRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmArnInput">alarmArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmRoleArnInput">alarmRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmArn">alarmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmRoleArn">alarmRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmArnInput`<sup>Optional</sup> <a name="alarmArnInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmArnInput"></a>

```typescript
public readonly alarmArnInput: string;
```

- *Type:* string

---

##### `alarmRoleArnInput`<sup>Optional</sup> <a name="alarmRoleArnInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmRoleArnInput"></a>

```typescript
public readonly alarmRoleArnInput: string;
```

- *Type:* string

---

##### `alarmArn`<sup>Required</sup> <a name="alarmArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmArn"></a>

```typescript
public readonly alarmArn: string;
```

- *Type:* string

---

##### `alarmRoleArn`<sup>Required</sup> <a name="alarmRoleArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmRoleArn"></a>

```typescript
public readonly alarmRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigEnvironmentMonitors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>

---


### AppconfigEnvironmentTagsList <a name="AppconfigEnvironmentTagsList" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

new appconfigEnvironment.AppconfigEnvironmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.get"></a>

```typescript
public get(index: number): AppconfigEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]

---


### AppconfigEnvironmentTagsOutputReference <a name="AppconfigEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktn/provider-awscc'

new appconfigEnvironment.AppconfigEnvironmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigEnvironmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>

---




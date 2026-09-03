# `apprunnerAutoScalingConfiguration` Submodule <a name="`apprunnerAutoScalingConfiguration` Submodule" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerAutoScalingConfiguration <a name="ApprunnerAutoScalingConfiguration" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration awscc_apprunner_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

new apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration(scope: Construct, id: string, config?: ApprunnerAutoScalingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig">ApprunnerAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig">ApprunnerAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetAutoScalingConfigurationName">resetAutoScalingConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | ApprunnerAutoScalingConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]

---

##### `resetAutoScalingConfigurationName` <a name="resetAutoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetAutoScalingConfigurationName"></a>

```typescript
public resetAutoScalingConfigurationName(): void
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxConcurrency"></a>

```typescript
public resetMaxConcurrency(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApprunnerAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApprunnerAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision">autoScalingConfigurationRevision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.latest">latest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList">ApprunnerAutoScalingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationNameInput">autoScalingConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName">autoScalingConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoScalingConfigurationArn`<sup>Required</sup> <a name="autoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn"></a>

```typescript
public readonly autoScalingConfigurationArn: string;
```

- *Type:* string

---

##### `autoScalingConfigurationRevision`<sup>Required</sup> <a name="autoScalingConfigurationRevision" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision"></a>

```typescript
public readonly autoScalingConfigurationRevision: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.latest"></a>

```typescript
public readonly latest: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tags"></a>

```typescript
public readonly tags: ApprunnerAutoScalingConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList">ApprunnerAutoScalingConfigurationTagsList</a>

---

##### `autoScalingConfigurationNameInput`<sup>Optional</sup> <a name="autoScalingConfigurationNameInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationNameInput"></a>

```typescript
public readonly autoScalingConfigurationNameInput: string;
```

- *Type:* string

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrencyInput"></a>

```typescript
public readonly maxConcurrencyInput: number;
```

- *Type:* number

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApprunnerAutoScalingConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]

---

##### `autoScalingConfigurationName`<sup>Required</sup> <a name="autoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName"></a>

```typescript
public readonly autoScalingConfigurationName: string;
```

- *Type:* string

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerAutoScalingConfigurationConfig <a name="ApprunnerAutoScalingConfigurationConfig" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.Initializer"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

const apprunnerAutoScalingConfigurationConfig: apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.autoScalingConfigurationName">autoScalingConfigurationName</a></code> | <code>string</code> | The customer-provided auto scaling configuration name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | The maximum number of concurrent requests that an instance processes. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxSize">maxSize</a></code> | <code>number</code> | The maximum number of instances that an App Runner service scales up to. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.minSize">minSize</a></code> | <code>number</code> | The minimum number of instances that App Runner provisions for a service. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]</code> | A list of metadata items that you can associate with your auto scaling configuration resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoScalingConfigurationName`<sup>Optional</sup> <a name="autoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.autoScalingConfigurationName"></a>

```typescript
public readonly autoScalingConfigurationName: string;
```

- *Type:* string

The customer-provided auto scaling configuration name.

When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#auto_scaling_configuration_name ApprunnerAutoScalingConfiguration#auto_scaling_configuration_name}

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

The maximum number of concurrent requests that an instance processes.

If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#max_concurrency ApprunnerAutoScalingConfiguration#max_concurrency}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

The maximum number of instances that an App Runner service scales up to.

At most MaxSize instances actively serve traffic for your service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#max_size ApprunnerAutoScalingConfiguration#max_size}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

The minimum number of instances that App Runner provisions for a service.

The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#min_size ApprunnerAutoScalingConfiguration#min_size}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApprunnerAutoScalingConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]

A list of metadata items that you can associate with your auto scaling configuration resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#tags ApprunnerAutoScalingConfiguration#tags}

---

### ApprunnerAutoScalingConfigurationTags <a name="ApprunnerAutoScalingConfigurationTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.Initializer"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

const apprunnerAutoScalingConfigurationTags: apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#key ApprunnerAutoScalingConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#value ApprunnerAutoScalingConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#key ApprunnerAutoScalingConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#value ApprunnerAutoScalingConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerAutoScalingConfigurationTagsList <a name="ApprunnerAutoScalingConfigurationTagsList" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

new apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get"></a>

```typescript
public get(index: number): ApprunnerAutoScalingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApprunnerAutoScalingConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]

---


### ApprunnerAutoScalingConfigurationTagsOutputReference <a name="ApprunnerAutoScalingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { apprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

new apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApprunnerAutoScalingConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>

---




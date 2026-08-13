# `appintegrationsApplication` Submodule <a name="`appintegrationsApplication` Submodule" id="@cdktn/provider-awscc.appintegrationsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsApplication <a name="AppintegrationsApplication" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application awscc_appintegrations_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

new appintegrationsApplication.AppintegrationsApplication(scope: Construct, id: string, config: AppintegrationsApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig">AppintegrationsApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig">AppintegrationsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig">putApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig">putApplicationSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig">putIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig">resetApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig">resetIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout">resetInitializationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService">resetIsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationConfig` <a name="putApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig"></a>

```typescript
public putApplicationConfig(value: AppintegrationsApplicationApplicationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---

##### `putApplicationSourceConfig` <a name="putApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig"></a>

```typescript
public putApplicationSourceConfig(value: AppintegrationsApplicationApplicationSourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---

##### `putIframeConfig` <a name="putIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig"></a>

```typescript
public putIframeConfig(value: AppintegrationsApplicationIframeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags"></a>

```typescript
public putTags(value: IResolvable | AppintegrationsApplicationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]

---

##### `resetApplicationConfig` <a name="resetApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig"></a>

```typescript
public resetApplicationConfig(): void
```

##### `resetApplicationType` <a name="resetApplicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType"></a>

```typescript
public resetApplicationType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIframeConfig` <a name="resetIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig"></a>

```typescript
public resetIframeConfig(): void
```

##### `resetInitializationTimeout` <a name="resetInitializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout"></a>

```typescript
public resetInitializationTimeout(): void
```

##### `resetIsService` <a name="resetIsService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService"></a>

```typescript
public resetIsService(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

appintegrationsApplication.AppintegrationsApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

appintegrationsApplication.AppintegrationsApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

appintegrationsApplication.AppintegrationsApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

appintegrationsApplication.AppintegrationsApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppintegrationsApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppintegrationsApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppintegrationsApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig">applicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig">iframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput">applicationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput">applicationSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput">applicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput">iframeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput">initializationTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput">isServiceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout">initializationTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService">isService</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `applicationConfig`<sup>Required</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig"></a>

```typescript
public readonly applicationConfig: AppintegrationsApplicationApplicationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationSourceConfig`<sup>Required</sup> <a name="applicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig"></a>

```typescript
public readonly applicationSourceConfig: AppintegrationsApplicationApplicationSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iframeConfig`<sup>Required</sup> <a name="iframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig"></a>

```typescript
public readonly iframeConfig: AppintegrationsApplicationIframeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags"></a>

```typescript
public readonly tags: AppintegrationsApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a>

---

##### `applicationConfigInput`<sup>Optional</sup> <a name="applicationConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput"></a>

```typescript
public readonly applicationConfigInput: IResolvable | AppintegrationsApplicationApplicationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---

##### `applicationSourceConfigInput`<sup>Optional</sup> <a name="applicationSourceConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput"></a>

```typescript
public readonly applicationSourceConfigInput: IResolvable | AppintegrationsApplicationApplicationSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput"></a>

```typescript
public readonly applicationTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `iframeConfigInput`<sup>Optional</sup> <a name="iframeConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput"></a>

```typescript
public readonly iframeConfigInput: IResolvable | AppintegrationsApplicationIframeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---

##### `initializationTimeoutInput`<sup>Optional</sup> <a name="initializationTimeoutInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput"></a>

```typescript
public readonly initializationTimeoutInput: number;
```

- *Type:* number

---

##### `isServiceInput`<sup>Optional</sup> <a name="isServiceInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput"></a>

```typescript
public readonly isServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppintegrationsApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `initializationTimeout`<sup>Required</sup> <a name="initializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout"></a>

```typescript
public readonly initializationTimeout: number;
```

- *Type:* number

---

##### `isService`<sup>Required</sup> <a name="isService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService"></a>

```typescript
public readonly isService: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsApplicationApplicationConfig <a name="AppintegrationsApplicationApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

const appintegrationsApplicationApplicationConfig: appintegrationsApplication.AppintegrationsApplicationApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling">contactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}. |

---

##### `contactHandling`<sup>Optional</sup> <a name="contactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling"></a>

```typescript
public readonly contactHandling: AppintegrationsApplicationApplicationConfigContactHandling;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}.

---

### AppintegrationsApplicationApplicationConfigContactHandling <a name="AppintegrationsApplicationApplicationConfigContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

const appintegrationsApplicationApplicationConfigContactHandling: appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}.

---

### AppintegrationsApplicationApplicationSourceConfig <a name="AppintegrationsApplicationApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

const appintegrationsApplicationApplicationSourceConfig: appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig">externalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}. |

---

##### `externalUrlConfig`<sup>Required</sup> <a name="externalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig"></a>

```typescript
public readonly externalUrlConfig: AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}.

---

### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

const appintegrationsApplicationApplicationSourceConfigExternalUrlConfig: appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl">accessUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins">approvedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}. |

---

##### `accessUrl`<sup>Required</sup> <a name="accessUrl" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl"></a>

```typescript
public readonly accessUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}.

---

##### `approvedOrigins`<sup>Optional</sup> <a name="approvedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins"></a>

```typescript
public readonly approvedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}.

---

### AppintegrationsApplicationConfig <a name="AppintegrationsApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

const appintegrationsApplicationConfig: appintegrationsApplication.AppintegrationsApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig">applicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | Application source config. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name">name</a></code> | <code>string</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | The application configuration. Cannot be used when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType">applicationType</a></code> | <code>string</code> | The type of application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description">description</a></code> | <code>string</code> | The application description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig">iframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | The iframe configuration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout">initializationTimeout</a></code> | <code>number</code> | The initialization timeout in milliseconds. Required when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService">isService</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if the application is a service. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions">permissions</a></code> | <code>string[]</code> | The configuration of events or requests that the application has access to. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]</code> | The tags (keys and values) associated with the application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationSourceConfig`<sup>Required</sup> <a name="applicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig"></a>

```typescript
public readonly applicationSourceConfig: AppintegrationsApplicationApplicationSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

Application source config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_source_config AppintegrationsApplication#application_source_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#name AppintegrationsApplication#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#namespace AppintegrationsApplication#namespace}

---

##### `applicationConfig`<sup>Optional</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig"></a>

```typescript
public readonly applicationConfig: AppintegrationsApplicationApplicationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

The application configuration. Cannot be used when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_config AppintegrationsApplication#application_config}

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

The type of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_type AppintegrationsApplication#application_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#description AppintegrationsApplication#description}

---

##### `iframeConfig`<sup>Optional</sup> <a name="iframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig"></a>

```typescript
public readonly iframeConfig: AppintegrationsApplicationIframeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

The iframe configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#iframe_config AppintegrationsApplication#iframe_config}

---

##### `initializationTimeout`<sup>Optional</sup> <a name="initializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout"></a>

```typescript
public readonly initializationTimeout: number;
```

- *Type:* number

The initialization timeout in milliseconds. Required when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#initialization_timeout AppintegrationsApplication#initialization_timeout}

---

##### `isService`<sup>Optional</sup> <a name="isService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService"></a>

```typescript
public readonly isService: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if the application is a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#is_service AppintegrationsApplication#is_service}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

The configuration of events or requests that the application has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#permissions AppintegrationsApplication#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppintegrationsApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]

The tags (keys and values) associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#tags AppintegrationsApplication#tags}

---

### AppintegrationsApplicationIframeConfig <a name="AppintegrationsApplicationIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

const appintegrationsApplicationIframeConfig: appintegrationsApplication.AppintegrationsApplicationIframeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow">allow</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox">sandbox</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow"></a>

```typescript
public readonly allow: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}.

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox"></a>

```typescript
public readonly sandbox: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}.

---

### AppintegrationsApplicationTags <a name="AppintegrationsApplicationTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

const appintegrationsApplicationTags: appintegrationsApplication.AppintegrationsApplicationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key">key</a></code> | <code>string</code> | A key to identify the tag. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value">value</a></code> | <code>string</code> | Corresponding tag value for the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A key to identify the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#key AppintegrationsApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Corresponding tag value for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#value AppintegrationsApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsApplicationApplicationConfigContactHandlingOutputReference <a name="AppintegrationsApplicationApplicationConfigContactHandlingOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

new appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsApplicationApplicationConfigContactHandling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---


### AppintegrationsApplicationApplicationConfigOutputReference <a name="AppintegrationsApplicationApplicationConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

new appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling">putContactHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling">resetContactHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContactHandling` <a name="putContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling"></a>

```typescript
public putContactHandling(value: AppintegrationsApplicationApplicationConfigContactHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---

##### `resetContactHandling` <a name="resetContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling"></a>

```typescript
public resetContactHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling">contactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput">contactHandlingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactHandling`<sup>Required</sup> <a name="contactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling"></a>

```typescript
public readonly contactHandling: AppintegrationsApplicationApplicationConfigContactHandlingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a>

---

##### `contactHandlingInput`<sup>Optional</sup> <a name="contactHandlingInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput"></a>

```typescript
public readonly contactHandlingInput: IResolvable | AppintegrationsApplicationApplicationConfigContactHandling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsApplicationApplicationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---


### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

new appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins">resetApprovedOrigins</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovedOrigins` <a name="resetApprovedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins"></a>

```typescript
public resetApprovedOrigins(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput">accessUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput">approvedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl">accessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins">approvedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessUrlInput`<sup>Optional</sup> <a name="accessUrlInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput"></a>

```typescript
public readonly accessUrlInput: string;
```

- *Type:* string

---

##### `approvedOriginsInput`<sup>Optional</sup> <a name="approvedOriginsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput"></a>

```typescript
public readonly approvedOriginsInput: string[];
```

- *Type:* string[]

---

##### `accessUrl`<sup>Required</sup> <a name="accessUrl" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl"></a>

```typescript
public readonly accessUrl: string;
```

- *Type:* string

---

##### `approvedOrigins`<sup>Required</sup> <a name="approvedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins"></a>

```typescript
public readonly approvedOrigins: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


### AppintegrationsApplicationApplicationSourceConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

new appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig">putExternalUrlConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalUrlConfig` <a name="putExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig"></a>

```typescript
public putExternalUrlConfig(value: AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig">externalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput">externalUrlConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalUrlConfig`<sup>Required</sup> <a name="externalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig"></a>

```typescript
public readonly externalUrlConfig: AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a>

---

##### `externalUrlConfigInput`<sup>Optional</sup> <a name="externalUrlConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput"></a>

```typescript
public readonly externalUrlConfigInput: IResolvable | AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsApplicationApplicationSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---


### AppintegrationsApplicationIframeConfigOutputReference <a name="AppintegrationsApplicationIframeConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

new appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox">resetSandbox</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllow` <a name="resetAllow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetSandbox` <a name="resetSandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox"></a>

```typescript
public resetSandbox(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput">allowInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput">sandboxInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow">allow</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox">sandbox</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: string[];
```

- *Type:* string[]

---

##### `sandboxInput`<sup>Optional</sup> <a name="sandboxInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput"></a>

```typescript
public readonly sandboxInput: string[];
```

- *Type:* string[]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow"></a>

```typescript
public readonly allow: string[];
```

- *Type:* string[]

---

##### `sandbox`<sup>Required</sup> <a name="sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox"></a>

```typescript
public readonly sandbox: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsApplicationIframeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---


### AppintegrationsApplicationTagsList <a name="AppintegrationsApplicationTagsList" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

new appintegrationsApplication.AppintegrationsApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get"></a>

```typescript
public get(index: number): AppintegrationsApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]

---


### AppintegrationsApplicationTagsOutputReference <a name="AppintegrationsApplicationTagsOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer"></a>

```typescript
import { appintegrationsApplication } from '@cdktn/provider-awscc'

new appintegrationsApplication.AppintegrationsApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsApplicationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>

---




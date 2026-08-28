# `quicksightDlpSetting` Submodule <a name="`quicksightDlpSetting` Submodule" id="@cdktn/provider-awscc.quicksightDlpSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDlpSetting <a name="QuicksightDlpSetting" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting awscc_quicksight_dlp_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

new quicksightDlpSetting.QuicksightDlpSetting(scope: Construct, id: string, config: QuicksightDlpSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig">QuicksightDlpSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig">QuicksightDlpSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig"></a>

```typescript
public putProviderConfig(value: QuicksightDlpSettingProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags"></a>

```typescript
public putTags(value: IResolvable | QuicksightDlpSettingTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightDlpSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

quicksightDlpSetting.QuicksightDlpSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuicksightDlpSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightDlpSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightDlpSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightDlpSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference">QuicksightDlpSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList">QuicksightDlpSettingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingIdInput">dlpSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageActionInput">providerOutageActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerTypeInput">providerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingId">dlpSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageAction">providerOutageAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfig"></a>

```typescript
public readonly providerConfig: QuicksightDlpSettingProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference">QuicksightDlpSettingProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tags"></a>

```typescript
public readonly tags: QuicksightDlpSettingTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList">QuicksightDlpSettingTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `dlpSettingIdInput`<sup>Optional</sup> <a name="dlpSettingIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingIdInput"></a>

```typescript
public readonly dlpSettingIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | QuicksightDlpSettingProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

---

##### `providerOutageActionInput`<sup>Optional</sup> <a name="providerOutageActionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageActionInput"></a>

```typescript
public readonly providerOutageActionInput: string;
```

- *Type:* string

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerTypeInput"></a>

```typescript
public readonly providerTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QuicksightDlpSettingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `dlpSettingId`<sup>Required</sup> <a name="dlpSettingId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingId"></a>

```typescript
public readonly dlpSettingId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerOutageAction`<sup>Required</sup> <a name="providerOutageAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageAction"></a>

```typescript
public readonly providerOutageAction: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDlpSettingConfig <a name="QuicksightDlpSettingConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

const quicksightDlpSettingConfig: quicksightDlpSetting.QuicksightDlpSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dlpSettingId">dlpSettingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#dlp_setting_id QuicksightDlpSetting#dlp_setting_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#name QuicksightDlpSetting#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_config QuicksightDlpSetting#provider_config}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerOutageAction">providerOutageAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_outage_action QuicksightDlpSetting#provider_outage_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerType">providerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_type QuicksightDlpSetting#provider_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#aws_account_id QuicksightDlpSetting#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#enabled QuicksightDlpSetting#enabled}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#tags QuicksightDlpSetting#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dlpSettingId`<sup>Required</sup> <a name="dlpSettingId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dlpSettingId"></a>

```typescript
public readonly dlpSettingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#dlp_setting_id QuicksightDlpSetting#dlp_setting_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#name QuicksightDlpSetting#name}.

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: QuicksightDlpSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_config QuicksightDlpSetting#provider_config}.

---

##### `providerOutageAction`<sup>Required</sup> <a name="providerOutageAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerOutageAction"></a>

```typescript
public readonly providerOutageAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_outage_action QuicksightDlpSetting#provider_outage_action}.

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_type QuicksightDlpSetting#provider_type}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#aws_account_id QuicksightDlpSetting#aws_account_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#enabled QuicksightDlpSetting#enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QuicksightDlpSettingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#tags QuicksightDlpSetting#tags}.

---

### QuicksightDlpSettingProviderConfig <a name="QuicksightDlpSettingProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

const quicksightDlpSettingProviderConfig: quicksightDlpSetting.QuicksightDlpSettingProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.property.microsoftPurview">microsoftPurview</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#microsoft_purview QuicksightDlpSetting#microsoft_purview}. |

---

##### `microsoftPurview`<sup>Optional</sup> <a name="microsoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.property.microsoftPurview"></a>

```typescript
public readonly microsoftPurview: QuicksightDlpSettingProviderConfigMicrosoftPurview;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#microsoft_purview QuicksightDlpSetting#microsoft_purview}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurview <a name="QuicksightDlpSettingProviderConfigMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

const quicksightDlpSettingProviderConfigMicrosoftPurview: quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#credentials QuicksightDlpSetting#credentials}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.labelActionMappings">labelActionMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_action_mappings QuicksightDlpSetting#label_action_mappings}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.unmappedAction">unmappedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#unmapped_action QuicksightDlpSetting#unmapped_action}. |

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.credentials"></a>

```typescript
public readonly credentials: QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#credentials QuicksightDlpSetting#credentials}.

---

##### `labelActionMappings`<sup>Optional</sup> <a name="labelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.labelActionMappings"></a>

```typescript
public readonly labelActionMappings: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_action_mappings QuicksightDlpSetting#label_action_mappings}.

---

##### `unmappedAction`<sup>Optional</sup> <a name="unmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.unmappedAction"></a>

```typescript
public readonly unmappedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#unmapped_action QuicksightDlpSetting#unmapped_action}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

const quicksightDlpSettingProviderConfigMicrosoftPurviewCredentials: quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#secret_arn QuicksightDlpSetting#secret_arn}. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#secret_arn QuicksightDlpSetting#secret_arn}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

const quicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings: quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#action QuicksightDlpSetting#action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelId">labelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_id QuicksightDlpSetting#label_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelName">labelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_name QuicksightDlpSetting#label_name}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#action QuicksightDlpSetting#action}.

---

##### `labelId`<sup>Optional</sup> <a name="labelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelId"></a>

```typescript
public readonly labelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_id QuicksightDlpSetting#label_id}.

---

##### `labelName`<sup>Optional</sup> <a name="labelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_name QuicksightDlpSetting#label_name}.

---

### QuicksightDlpSettingTags <a name="QuicksightDlpSettingTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

const quicksightDlpSettingTags: quicksightDlpSetting.QuicksightDlpSettingTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.key">key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.value">value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#key QuicksightDlpSetting#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#value QuicksightDlpSetting#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

new quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

new quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get"></a>

```typescript
public get(index: number): QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

new quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelId">resetLabelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelName">resetLabelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetLabelId` <a name="resetLabelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelId"></a>

```typescript
public resetLabelId(): void
```

##### `resetLabelName` <a name="resetLabelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelName"></a>

```typescript
public resetLabelName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelIdInput">labelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelNameInput">labelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelId">labelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelName">labelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `labelIdInput`<sup>Optional</sup> <a name="labelIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelIdInput"></a>

```typescript
public readonly labelIdInput: string;
```

- *Type:* string

---

##### `labelNameInput`<sup>Optional</sup> <a name="labelNameInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelNameInput"></a>

```typescript
public readonly labelNameInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `labelId`<sup>Required</sup> <a name="labelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelId"></a>

```typescript
public readonly labelId: string;
```

- *Type:* string

---

##### `labelName`<sup>Required</sup> <a name="labelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

new quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings">putLabelActionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetLabelActionMappings">resetLabelActionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetUnmappedAction">resetUnmappedAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials"></a>

```typescript
public putCredentials(value: QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

---

##### `putLabelActionMappings` <a name="putLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings"></a>

```typescript
public putLabelActionMappings(value: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetLabelActionMappings` <a name="resetLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetLabelActionMappings"></a>

```typescript
public resetLabelActionMappings(): void
```

##### `resetUnmappedAction` <a name="resetUnmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetUnmappedAction"></a>

```typescript
public resetUnmappedAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappings">labelActionMappings</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappingsInput">labelActionMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedActionInput">unmappedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedAction">unmappedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentials"></a>

```typescript
public readonly credentials: QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference</a>

---

##### `labelActionMappings`<sup>Required</sup> <a name="labelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappings"></a>

```typescript
public readonly labelActionMappings: QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

---

##### `labelActionMappingsInput`<sup>Optional</sup> <a name="labelActionMappingsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappingsInput"></a>

```typescript
public readonly labelActionMappingsInput: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]

---

##### `unmappedActionInput`<sup>Optional</sup> <a name="unmappedActionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedActionInput"></a>

```typescript
public readonly unmappedActionInput: string;
```

- *Type:* string

---

##### `unmappedAction`<sup>Required</sup> <a name="unmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedAction"></a>

```typescript
public readonly unmappedAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurview;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

---


### QuicksightDlpSettingProviderConfigOutputReference <a name="QuicksightDlpSettingProviderConfigOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

new quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview">putMicrosoftPurview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resetMicrosoftPurview">resetMicrosoftPurview</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMicrosoftPurview` <a name="putMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview"></a>

```typescript
public putMicrosoftPurview(value: QuicksightDlpSettingProviderConfigMicrosoftPurview): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

---

##### `resetMicrosoftPurview` <a name="resetMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resetMicrosoftPurview"></a>

```typescript
public resetMicrosoftPurview(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurview">microsoftPurview</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurviewInput">microsoftPurviewInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `microsoftPurview`<sup>Required</sup> <a name="microsoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurview"></a>

```typescript
public readonly microsoftPurview: QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference</a>

---

##### `microsoftPurviewInput`<sup>Optional</sup> <a name="microsoftPurviewInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurviewInput"></a>

```typescript
public readonly microsoftPurviewInput: IResolvable | QuicksightDlpSettingProviderConfigMicrosoftPurview;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightDlpSettingProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

---


### QuicksightDlpSettingTagsList <a name="QuicksightDlpSettingTagsList" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

new quicksightDlpSetting.QuicksightDlpSettingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get"></a>

```typescript
public get(index: number): QuicksightDlpSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightDlpSettingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]

---


### QuicksightDlpSettingTagsOutputReference <a name="QuicksightDlpSettingTagsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer"></a>

```typescript
import { quicksightDlpSetting } from '@cdktn/provider-awscc'

new quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightDlpSettingTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>

---




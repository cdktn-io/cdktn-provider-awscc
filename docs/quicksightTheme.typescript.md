# `quicksightTheme` Submodule <a name="`quicksightTheme` Submodule" id="@cdktn/provider-awscc.quicksightTheme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTheme <a name="QuicksightTheme" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme awscc_quicksight_theme}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightTheme(scope: Construct, id: string, config: QuicksightThemeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig">QuicksightThemeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig">QuicksightThemeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetVersionDescription">resetVersionDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration"></a>

```typescript
public putConfiguration(value: QuicksightThemeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | QuicksightThemePermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putTags"></a>

```typescript
public putTags(value: IResolvable | QuicksightThemeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>[]

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVersionDescription` <a name="resetVersionDescription" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetVersionDescription"></a>

```typescript
public resetVersionDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightTheme resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isConstruct"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

quicksightTheme.QuicksightTheme.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformElement"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

quicksightTheme.QuicksightTheme.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformResource"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

quicksightTheme.QuicksightTheme.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

quicksightTheme.QuicksightTheme.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuicksightTheme resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightTheme to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightTheme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightTheme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference">QuicksightThemeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList">QuicksightThemePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList">QuicksightThemeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.version">version</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference">QuicksightThemeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.baseThemeIdInput">baseThemeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.permissionsInput">permissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.themeIdInput">themeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.baseThemeId">baseThemeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.themeId">themeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.configuration"></a>

```typescript
public readonly configuration: QuicksightThemeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference">QuicksightThemeConfigurationOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.permissions"></a>

```typescript
public readonly permissions: QuicksightThemePermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList">QuicksightThemePermissionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tags"></a>

```typescript
public readonly tags: QuicksightThemeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList">QuicksightThemeTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.version"></a>

```typescript
public readonly version: QuicksightThemeVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference">QuicksightThemeVersionOutputReference</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `baseThemeIdInput`<sup>Optional</sup> <a name="baseThemeIdInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.baseThemeIdInput"></a>

```typescript
public readonly baseThemeIdInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | QuicksightThemeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | QuicksightThemePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QuicksightThemeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>[]

---

##### `themeIdInput`<sup>Optional</sup> <a name="themeIdInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.themeIdInput"></a>

```typescript
public readonly themeIdInput: string;
```

- *Type:* string

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.versionDescriptionInput"></a>

```typescript
public readonly versionDescriptionInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `baseThemeId`<sup>Required</sup> <a name="baseThemeId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.baseThemeId"></a>

```typescript
public readonly baseThemeId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.themeId"></a>

```typescript
public readonly themeId: string;
```

- *Type:* string

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightThemeConfig <a name="QuicksightThemeConfig" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfig: quicksightTheme.QuicksightThemeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.baseThemeId">baseThemeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | <p>The theme configuration. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#name QuicksightTheme#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.themeId">themeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.versionDescription">versionDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}.

---

##### `baseThemeId`<sup>Required</sup> <a name="baseThemeId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.baseThemeId"></a>

```typescript
public readonly baseThemeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.configuration"></a>

```typescript
public readonly configuration: QuicksightThemeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

<p>The theme configuration.

This configuration contains all of the display properties for
            a theme.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#name QuicksightTheme#name}.

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.themeId"></a>

```typescript
public readonly themeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | QuicksightThemePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QuicksightThemeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}.

---

##### `versionDescription`<sup>Optional</sup> <a name="versionDescription" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}.

---

### QuicksightThemeConfiguration <a name="QuicksightThemeConfiguration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfiguration: quicksightTheme.QuicksightThemeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.dataColorPalette">dataColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | <p>The theme colors that are used for data colors in charts. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | <p>The theme display options for sheets. </p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.uiColorPalette">uiColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | <p>The theme colors that apply to UI and to charts, excluding data colors. |

---

##### `dataColorPalette`<sup>Optional</sup> <a name="dataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.dataColorPalette"></a>

```typescript
public readonly dataColorPalette: QuicksightThemeConfigurationDataColorPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

<p>The theme colors that are used for data colors in charts.

The colors description is a
            hexadecimal color code that consists of six alphanumerical characters, prefixed with
                <code>#</code>, for example #37BFF5. </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}

---

##### `sheet`<sup>Optional</sup> <a name="sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.sheet"></a>

```typescript
public readonly sheet: QuicksightThemeConfigurationSheet;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

<p>The theme display options for sheets. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}

---

##### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.typography"></a>

```typescript
public readonly typography: QuicksightThemeConfigurationTypography;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}.

---

##### `uiColorPalette`<sup>Optional</sup> <a name="uiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.uiColorPalette"></a>

```typescript
public readonly uiColorPalette: QuicksightThemeConfigurationUiColorPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

<p>The theme colors that apply to UI and to charts, excluding data colors.

The colors
            description is a hexadecimal color code that consists of six alphanumerical characters,
            prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
                Guide.</i>
         </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}

---

### QuicksightThemeConfigurationDataColorPalette <a name="QuicksightThemeConfigurationDataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationDataColorPalette: quicksightTheme.QuicksightThemeConfigurationDataColorPalette = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.colors">colors</a></code> | <code>string[]</code> | <p>The hexadecimal codes for the colors.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.emptyFillColor">emptyFillColor</a></code> | <code>string</code> | <p>The hexadecimal code of a color that applies to charts where a lack of data is             highlighted.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.minMaxGradient">minMaxGradient</a></code> | <code>string[]</code> | <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>. |

---

##### `colors`<sup>Optional</sup> <a name="colors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.colors"></a>

```typescript
public readonly colors: string[];
```

- *Type:* string[]

<p>The hexadecimal codes for the colors.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}

---

##### `emptyFillColor`<sup>Optional</sup> <a name="emptyFillColor" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.emptyFillColor"></a>

```typescript
public readonly emptyFillColor: string;
```

- *Type:* string

<p>The hexadecimal code of a color that applies to charts where a lack of data is             highlighted.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}

---

##### `minMaxGradient`<sup>Optional</sup> <a name="minMaxGradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.minMaxGradient"></a>

```typescript
public readonly minMaxGradient: string[];
```

- *Type:* string[]

<p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}

---

### QuicksightThemeConfigurationSheet <a name="QuicksightThemeConfigurationSheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationSheet: quicksightTheme.QuicksightThemeConfigurationSheet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | <p>Display options related to tiles on a sheet.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.property.tileLayout">tileLayout</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | <p>The display options for the layout of tiles on a sheet.</p>. |

---

##### `tile`<sup>Optional</sup> <a name="tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.property.tile"></a>

```typescript
public readonly tile: QuicksightThemeConfigurationSheetTile;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

<p>Display options related to tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#tile QuicksightTheme#tile}

---

##### `tileLayout`<sup>Optional</sup> <a name="tileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.property.tileLayout"></a>

```typescript
public readonly tileLayout: QuicksightThemeConfigurationSheetTileLayout;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

<p>The display options for the layout of tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}

---

### QuicksightThemeConfigurationSheetTile <a name="QuicksightThemeConfigurationSheetTile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationSheetTile: quicksightTheme.QuicksightThemeConfigurationSheetTile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | <p>The display options for tile borders for visuals.</p>. |

---

##### `border`<sup>Optional</sup> <a name="border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile.property.border"></a>

```typescript
public readonly border: QuicksightThemeConfigurationSheetTileBorder;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

<p>The display options for tile borders for visuals.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#border QuicksightTheme#border}

---

### QuicksightThemeConfigurationSheetTileBorder <a name="QuicksightThemeConfigurationSheetTileBorder" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationSheetTileBorder: quicksightTheme.QuicksightThemeConfigurationSheetTileBorder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.property.show">show</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>The option to enable display of borders for visuals.</p>. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.property.show"></a>

```typescript
public readonly show: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>The option to enable display of borders for visuals.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

### QuicksightThemeConfigurationSheetTileLayout <a name="QuicksightThemeConfigurationSheetTileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationSheetTileLayout: quicksightTheme.QuicksightThemeConfigurationSheetTileLayout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | <p>The display options for gutter spacing between tiles on a sheet.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | <p>The display options for margins around the outside edge of sheets.</p>. |

---

##### `gutter`<sup>Optional</sup> <a name="gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.gutter"></a>

```typescript
public readonly gutter: QuicksightThemeConfigurationSheetTileLayoutGutter;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

<p>The display options for gutter spacing between tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}

---

##### `margin`<sup>Optional</sup> <a name="margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.margin"></a>

```typescript
public readonly margin: QuicksightThemeConfigurationSheetTileLayoutMargin;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

<p>The display options for margins around the outside edge of sheets.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#margin QuicksightTheme#margin}

---

### QuicksightThemeConfigurationSheetTileLayoutGutter <a name="QuicksightThemeConfigurationSheetTileLayoutGutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationSheetTileLayoutGutter: quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.property.show">show</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>This Boolean value controls whether to display a gutter space between sheet tiles. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.property.show"></a>

```typescript
public readonly show: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>This Boolean value controls whether to display a gutter space between sheet tiles.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

### QuicksightThemeConfigurationSheetTileLayoutMargin <a name="QuicksightThemeConfigurationSheetTileLayoutMargin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationSheetTileLayoutMargin: quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.property.show">show</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>This Boolean value controls whether to display sheet margins.</p>. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.property.show"></a>

```typescript
public readonly show: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>This Boolean value controls whether to display sheet margins.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

### QuicksightThemeConfigurationTypography <a name="QuicksightThemeConfigurationTypography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationTypography: quicksightTheme.QuicksightThemeConfigurationTypography = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography.property.fontFamilies">fontFamilies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}. |

---

##### `fontFamilies`<sup>Optional</sup> <a name="fontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography.property.fontFamilies"></a>

```typescript
public readonly fontFamilies: IResolvable | QuicksightThemeConfigurationTypographyFontFamilies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}.

---

### QuicksightThemeConfigurationTypographyFontFamilies <a name="QuicksightThemeConfigurationTypographyFontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationTypographyFontFamilies: quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.property.fontFamily">fontFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}. |

---

##### `fontFamily`<sup>Optional</sup> <a name="fontFamily" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}.

---

### QuicksightThemeConfigurationUiColorPalette <a name="QuicksightThemeConfigurationUiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeConfigurationUiColorPalette: quicksightTheme.QuicksightThemeConfigurationUiColorPalette = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accent">accent</a></code> | <code>string</code> | <p>This color is that applies to selected states and buttons.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accentForeground">accentForeground</a></code> | <code>string</code> | <p>The foreground color that applies to any text or other elements that appear over the             accent color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.danger">danger</a></code> | <code>string</code> | <p>The color that applies to error messages.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dangerForeground">dangerForeground</a></code> | <code>string</code> | <p>The foreground color that applies to any text or other elements that appear over the             error color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimension">dimension</a></code> | <code>string</code> | <p>The color that applies to the names of fields that are identified as             dimensions.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimensionForeground">dimensionForeground</a></code> | <code>string</code> | <p>The foreground color that applies to any text or other elements that appear over the             dimension color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measure">measure</a></code> | <code>string</code> | <p>The color that applies to the names of fields that are identified as measures.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measureForeground">measureForeground</a></code> | <code>string</code> | <p>The foreground color that applies to any text or other elements that appear over the             measure color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryBackground">primaryBackground</a></code> | <code>string</code> | <p>The background color that applies to visuals and other high emphasis UI.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryForeground">primaryForeground</a></code> | <code>string</code> | <p>The color of text and other foreground elements that appear over the primary             background regions, such as grid lines, borders, table banding, icons, and so on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryBackground">secondaryBackground</a></code> | <code>string</code> | <p>The background color that applies to the sheet background and sheet controls.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryForeground">secondaryForeground</a></code> | <code>string</code> | <p>The foreground color that applies to any sheet title, sheet control text, or UI that             appears over the secondary background.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.success">success</a></code> | <code>string</code> | <p>The color that applies to success messages, for example the check mark for a             successful download.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.successForeground">successForeground</a></code> | <code>string</code> | <p>The foreground color that applies to any text or other elements that appear over the             success color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warning">warning</a></code> | <code>string</code> | <p>This color that applies to warning and informational messages.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warningForeground">warningForeground</a></code> | <code>string</code> | <p>The foreground color that applies to any text or other elements that appear over the             warning color.</p>. |

---

##### `accent`<sup>Optional</sup> <a name="accent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accent"></a>

```typescript
public readonly accent: string;
```

- *Type:* string

<p>This color is that applies to selected states and buttons.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}

---

##### `accentForeground`<sup>Optional</sup> <a name="accentForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accentForeground"></a>

```typescript
public readonly accentForeground: string;
```

- *Type:* string

<p>The foreground color that applies to any text or other elements that appear over the             accent color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}

---

##### `danger`<sup>Optional</sup> <a name="danger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.danger"></a>

```typescript
public readonly danger: string;
```

- *Type:* string

<p>The color that applies to error messages.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}

---

##### `dangerForeground`<sup>Optional</sup> <a name="dangerForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dangerForeground"></a>

```typescript
public readonly dangerForeground: string;
```

- *Type:* string

<p>The foreground color that applies to any text or other elements that appear over the             error color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

<p>The color that applies to the names of fields that are identified as             dimensions.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}

---

##### `dimensionForeground`<sup>Optional</sup> <a name="dimensionForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimensionForeground"></a>

```typescript
public readonly dimensionForeground: string;
```

- *Type:* string

<p>The foreground color that applies to any text or other elements that appear over the             dimension color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}

---

##### `measure`<sup>Optional</sup> <a name="measure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measure"></a>

```typescript
public readonly measure: string;
```

- *Type:* string

<p>The color that applies to the names of fields that are identified as measures.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}

---

##### `measureForeground`<sup>Optional</sup> <a name="measureForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measureForeground"></a>

```typescript
public readonly measureForeground: string;
```

- *Type:* string

<p>The foreground color that applies to any text or other elements that appear over the             measure color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}

---

##### `primaryBackground`<sup>Optional</sup> <a name="primaryBackground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryBackground"></a>

```typescript
public readonly primaryBackground: string;
```

- *Type:* string

<p>The background color that applies to visuals and other high emphasis UI.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}

---

##### `primaryForeground`<sup>Optional</sup> <a name="primaryForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryForeground"></a>

```typescript
public readonly primaryForeground: string;
```

- *Type:* string

<p>The color of text and other foreground elements that appear over the primary             background regions, such as grid lines, borders, table banding, icons, and so on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}

---

##### `secondaryBackground`<sup>Optional</sup> <a name="secondaryBackground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryBackground"></a>

```typescript
public readonly secondaryBackground: string;
```

- *Type:* string

<p>The background color that applies to the sheet background and sheet controls.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}

---

##### `secondaryForeground`<sup>Optional</sup> <a name="secondaryForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryForeground"></a>

```typescript
public readonly secondaryForeground: string;
```

- *Type:* string

<p>The foreground color that applies to any sheet title, sheet control text, or UI that             appears over the secondary background.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}

---

##### `success`<sup>Optional</sup> <a name="success" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.success"></a>

```typescript
public readonly success: string;
```

- *Type:* string

<p>The color that applies to success messages, for example the check mark for a             successful download.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#success QuicksightTheme#success}

---

##### `successForeground`<sup>Optional</sup> <a name="successForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.successForeground"></a>

```typescript
public readonly successForeground: string;
```

- *Type:* string

<p>The foreground color that applies to any text or other elements that appear over the             success color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

<p>This color that applies to warning and informational messages.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}

---

##### `warningForeground`<sup>Optional</sup> <a name="warningForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warningForeground"></a>

```typescript
public readonly warningForeground: string;
```

- *Type:* string

<p>The foreground color that applies to any text or other elements that appear over the             warning color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}

---

### QuicksightThemePermissions <a name="QuicksightThemePermissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemePermissions: quicksightTheme.QuicksightThemePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.property.actions">actions</a></code> | <code>string[]</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.property.principal">principal</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#actions QuicksightTheme#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
            following:</p>
         <ul>
            <li>
               <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
               <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#principal QuicksightTheme#principal}

---

### QuicksightThemeTags <a name="QuicksightThemeTags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeTags: quicksightTheme.QuicksightThemeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.property.key">key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.property.value">value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#key QuicksightTheme#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_theme#value QuicksightTheme#value}

---

### QuicksightThemeVersion <a name="QuicksightThemeVersion" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersion.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersion: quicksightTheme.QuicksightThemeVersion = { ... }
```


### QuicksightThemeVersionConfiguration <a name="QuicksightThemeVersionConfiguration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfiguration.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfiguration: quicksightTheme.QuicksightThemeVersionConfiguration = { ... }
```


### QuicksightThemeVersionConfigurationDataColorPalette <a name="QuicksightThemeVersionConfigurationDataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationDataColorPalette: quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette = { ... }
```


### QuicksightThemeVersionConfigurationSheet <a name="QuicksightThemeVersionConfigurationSheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheet.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationSheet: quicksightTheme.QuicksightThemeVersionConfigurationSheet = { ... }
```


### QuicksightThemeVersionConfigurationSheetTile <a name="QuicksightThemeVersionConfigurationSheetTile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTile.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationSheetTile: quicksightTheme.QuicksightThemeVersionConfigurationSheetTile = { ... }
```


### QuicksightThemeVersionConfigurationSheetTileBorder <a name="QuicksightThemeVersionConfigurationSheetTileBorder" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationSheetTileBorder: quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder = { ... }
```


### QuicksightThemeVersionConfigurationSheetTileLayout <a name="QuicksightThemeVersionConfigurationSheetTileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationSheetTileLayout: quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout = { ... }
```


### QuicksightThemeVersionConfigurationSheetTileLayoutGutter <a name="QuicksightThemeVersionConfigurationSheetTileLayoutGutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationSheetTileLayoutGutter: quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter = { ... }
```


### QuicksightThemeVersionConfigurationSheetTileLayoutMargin <a name="QuicksightThemeVersionConfigurationSheetTileLayoutMargin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationSheetTileLayoutMargin: quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin = { ... }
```


### QuicksightThemeVersionConfigurationTypography <a name="QuicksightThemeVersionConfigurationTypography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypography.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationTypography: quicksightTheme.QuicksightThemeVersionConfigurationTypography = { ... }
```


### QuicksightThemeVersionConfigurationTypographyFontFamilies <a name="QuicksightThemeVersionConfigurationTypographyFontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationTypographyFontFamilies: quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies = { ... }
```


### QuicksightThemeVersionConfigurationUiColorPalette <a name="QuicksightThemeVersionConfigurationUiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionConfigurationUiColorPalette: quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette = { ... }
```


### QuicksightThemeVersionErrors <a name="QuicksightThemeVersionErrors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrors.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

const quicksightThemeVersionErrors: quicksightTheme.QuicksightThemeVersionErrors = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### QuicksightThemeConfigurationDataColorPaletteOutputReference <a name="QuicksightThemeConfigurationDataColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetColors">resetColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetEmptyFillColor">resetEmptyFillColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetMinMaxGradient">resetMinMaxGradient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColors` <a name="resetColors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetColors"></a>

```typescript
public resetColors(): void
```

##### `resetEmptyFillColor` <a name="resetEmptyFillColor" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetEmptyFillColor"></a>

```typescript
public resetEmptyFillColor(): void
```

##### `resetMinMaxGradient` <a name="resetMinMaxGradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetMinMaxGradient"></a>

```typescript
public resetMinMaxGradient(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colorsInput">colorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColorInput">emptyFillColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradientInput">minMaxGradientInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor">emptyFillColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient">minMaxGradient</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `colorsInput`<sup>Optional</sup> <a name="colorsInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colorsInput"></a>

```typescript
public readonly colorsInput: string[];
```

- *Type:* string[]

---

##### `emptyFillColorInput`<sup>Optional</sup> <a name="emptyFillColorInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColorInput"></a>

```typescript
public readonly emptyFillColorInput: string;
```

- *Type:* string

---

##### `minMaxGradientInput`<sup>Optional</sup> <a name="minMaxGradientInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradientInput"></a>

```typescript
public readonly minMaxGradientInput: string[];
```

- *Type:* string[]

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors"></a>

```typescript
public readonly colors: string[];
```

- *Type:* string[]

---

##### `emptyFillColor`<sup>Required</sup> <a name="emptyFillColor" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```typescript
public readonly emptyFillColor: string;
```

- *Type:* string

---

##### `minMaxGradient`<sup>Required</sup> <a name="minMaxGradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```typescript
public readonly minMaxGradient: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationDataColorPalette;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---


### QuicksightThemeConfigurationOutputReference <a name="QuicksightThemeConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette">putDataColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet">putSheet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography">putTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette">putUiColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetDataColorPalette">resetDataColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetSheet">resetSheet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetTypography">resetTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetUiColorPalette">resetUiColorPalette</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataColorPalette` <a name="putDataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette"></a>

```typescript
public putDataColorPalette(value: QuicksightThemeConfigurationDataColorPalette): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---

##### `putSheet` <a name="putSheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet"></a>

```typescript
public putSheet(value: QuicksightThemeConfigurationSheet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---

##### `putTypography` <a name="putTypography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography"></a>

```typescript
public putTypography(value: QuicksightThemeConfigurationTypography): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---

##### `putUiColorPalette` <a name="putUiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette"></a>

```typescript
public putUiColorPalette(value: QuicksightThemeConfigurationUiColorPalette): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---

##### `resetDataColorPalette` <a name="resetDataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetDataColorPalette"></a>

```typescript
public resetDataColorPalette(): void
```

##### `resetSheet` <a name="resetSheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetSheet"></a>

```typescript
public resetSheet(): void
```

##### `resetTypography` <a name="resetTypography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetTypography"></a>

```typescript
public resetTypography(): void
```

##### `resetUiColorPalette` <a name="resetUiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetUiColorPalette"></a>

```typescript
public resetUiColorPalette(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPalette">dataColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference">QuicksightThemeConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference">QuicksightThemeConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference">QuicksightThemeConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPalette">uiColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference">QuicksightThemeConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPaletteInput">dataColorPaletteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheetInput">sheetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typographyInput">typographyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPaletteInput">uiColorPaletteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataColorPalette`<sup>Required</sup> <a name="dataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPalette"></a>

```typescript
public readonly dataColorPalette: QuicksightThemeConfigurationDataColorPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference">QuicksightThemeConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheet"></a>

```typescript
public readonly sheet: QuicksightThemeConfigurationSheetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference">QuicksightThemeConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typography"></a>

```typescript
public readonly typography: QuicksightThemeConfigurationTypographyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference">QuicksightThemeConfigurationTypographyOutputReference</a>

---

##### `uiColorPalette`<sup>Required</sup> <a name="uiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPalette"></a>

```typescript
public readonly uiColorPalette: QuicksightThemeConfigurationUiColorPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference">QuicksightThemeConfigurationUiColorPaletteOutputReference</a>

---

##### `dataColorPaletteInput`<sup>Optional</sup> <a name="dataColorPaletteInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPaletteInput"></a>

```typescript
public readonly dataColorPaletteInput: IResolvable | QuicksightThemeConfigurationDataColorPalette;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---

##### `sheetInput`<sup>Optional</sup> <a name="sheetInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheetInput"></a>

```typescript
public readonly sheetInput: IResolvable | QuicksightThemeConfigurationSheet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---

##### `typographyInput`<sup>Optional</sup> <a name="typographyInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typographyInput"></a>

```typescript
public readonly typographyInput: IResolvable | QuicksightThemeConfigurationTypography;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---

##### `uiColorPaletteInput`<sup>Optional</sup> <a name="uiColorPaletteInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPaletteInput"></a>

```typescript
public readonly uiColorPaletteInput: IResolvable | QuicksightThemeConfigurationUiColorPalette;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---


### QuicksightThemeConfigurationSheetOutputReference <a name="QuicksightThemeConfigurationSheetOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationSheetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile">putTile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout">putTileLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTile">resetTile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTileLayout">resetTileLayout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTile` <a name="putTile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile"></a>

```typescript
public putTile(value: QuicksightThemeConfigurationSheetTile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---

##### `putTileLayout` <a name="putTileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout"></a>

```typescript
public putTileLayout(value: QuicksightThemeConfigurationSheetTileLayout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---

##### `resetTile` <a name="resetTile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTile"></a>

```typescript
public resetTile(): void
```

##### `resetTileLayout` <a name="resetTileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTileLayout"></a>

```typescript
public resetTileLayout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference">QuicksightThemeConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayout">tileLayout</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference">QuicksightThemeConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileInput">tileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayoutInput">tileLayoutInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tile"></a>

```typescript
public readonly tile: QuicksightThemeConfigurationSheetTileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference">QuicksightThemeConfigurationSheetTileOutputReference</a>

---

##### `tileLayout`<sup>Required</sup> <a name="tileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayout"></a>

```typescript
public readonly tileLayout: QuicksightThemeConfigurationSheetTileLayoutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference">QuicksightThemeConfigurationSheetTileLayoutOutputReference</a>

---

##### `tileInput`<sup>Optional</sup> <a name="tileInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileInput"></a>

```typescript
public readonly tileInput: IResolvable | QuicksightThemeConfigurationSheetTile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---

##### `tileLayoutInput`<sup>Optional</sup> <a name="tileLayoutInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayoutInput"></a>

```typescript
public readonly tileLayoutInput: IResolvable | QuicksightThemeConfigurationSheetTileLayout;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationSheet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---


### QuicksightThemeConfigurationSheetTileBorderOutputReference <a name="QuicksightThemeConfigurationSheetTileBorderOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resetShow">resetShow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShow` <a name="resetShow" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resetShow"></a>

```typescript
public resetShow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.showInput">showInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `showInput`<sup>Optional</sup> <a name="showInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.showInput"></a>

```typescript
public readonly showInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.show"></a>

```typescript
public readonly show: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationSheetTileBorder;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---


### QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resetShow">resetShow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShow` <a name="resetShow" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resetShow"></a>

```typescript
public resetShow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.showInput">showInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `showInput`<sup>Optional</sup> <a name="showInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.showInput"></a>

```typescript
public readonly showInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```typescript
public readonly show: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationSheetTileLayoutGutter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---


### QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resetShow">resetShow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShow` <a name="resetShow" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resetShow"></a>

```typescript
public resetShow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.showInput">showInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `showInput`<sup>Optional</sup> <a name="showInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.showInput"></a>

```typescript
public readonly showInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```typescript
public readonly show: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationSheetTileLayoutMargin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---


### QuicksightThemeConfigurationSheetTileLayoutOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter">putGutter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin">putMargin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetGutter">resetGutter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetMargin">resetMargin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGutter` <a name="putGutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter"></a>

```typescript
public putGutter(value: QuicksightThemeConfigurationSheetTileLayoutGutter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---

##### `putMargin` <a name="putMargin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin"></a>

```typescript
public putMargin(value: QuicksightThemeConfigurationSheetTileLayoutMargin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---

##### `resetGutter` <a name="resetGutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetGutter"></a>

```typescript
public resetGutter(): void
```

##### `resetMargin` <a name="resetMargin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetMargin"></a>

```typescript
public resetMargin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutterInput">gutterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.marginInput">marginInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```typescript
public readonly gutter: QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```typescript
public readonly margin: QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `gutterInput`<sup>Optional</sup> <a name="gutterInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutterInput"></a>

```typescript
public readonly gutterInput: IResolvable | QuicksightThemeConfigurationSheetTileLayoutGutter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---

##### `marginInput`<sup>Optional</sup> <a name="marginInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.marginInput"></a>

```typescript
public readonly marginInput: IResolvable | QuicksightThemeConfigurationSheetTileLayoutMargin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationSheetTileLayout;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---


### QuicksightThemeConfigurationSheetTileOutputReference <a name="QuicksightThemeConfigurationSheetTileOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder">putBorder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resetBorder">resetBorder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBorder` <a name="putBorder" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder"></a>

```typescript
public putBorder(value: QuicksightThemeConfigurationSheetTileBorder): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---

##### `resetBorder` <a name="resetBorder" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resetBorder"></a>

```typescript
public resetBorder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference">QuicksightThemeConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.borderInput">borderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.border"></a>

```typescript
public readonly border: QuicksightThemeConfigurationSheetTileBorderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference">QuicksightThemeConfigurationSheetTileBorderOutputReference</a>

---

##### `borderInput`<sup>Optional</sup> <a name="borderInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.borderInput"></a>

```typescript
public readonly borderInput: IResolvable | QuicksightThemeConfigurationSheetTileBorder;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationSheetTile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---


### QuicksightThemeConfigurationTypographyFontFamiliesList <a name="QuicksightThemeConfigurationTypographyFontFamiliesList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get"></a>

```typescript
public get(index: number): QuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationTypographyFontFamilies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>[]

---


### QuicksightThemeConfigurationTypographyFontFamiliesOutputReference <a name="QuicksightThemeConfigurationTypographyFontFamiliesOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resetFontFamily">resetFontFamily</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFontFamily` <a name="resetFontFamily" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resetFontFamily"></a>

```typescript
public resetFontFamily(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamilyInput">fontFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">fontFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamilyInput`<sup>Optional</sup> <a name="fontFamilyInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamilyInput"></a>

```typescript
public readonly fontFamilyInput: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationTypographyFontFamilies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>

---


### QuicksightThemeConfigurationTypographyOutputReference <a name="QuicksightThemeConfigurationTypographyOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies">putFontFamilies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resetFontFamilies">resetFontFamilies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFontFamilies` <a name="putFontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies"></a>

```typescript
public putFontFamilies(value: IResolvable | QuicksightThemeConfigurationTypographyFontFamilies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>[]

---

##### `resetFontFamilies` <a name="resetFontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resetFontFamilies"></a>

```typescript
public resetFontFamilies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies">fontFamilies</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList">QuicksightThemeConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamiliesInput">fontFamiliesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamilies`<sup>Required</sup> <a name="fontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies"></a>

```typescript
public readonly fontFamilies: QuicksightThemeConfigurationTypographyFontFamiliesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList">QuicksightThemeConfigurationTypographyFontFamiliesList</a>

---

##### `fontFamiliesInput`<sup>Optional</sup> <a name="fontFamiliesInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamiliesInput"></a>

```typescript
public readonly fontFamiliesInput: IResolvable | QuicksightThemeConfigurationTypographyFontFamilies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationTypography;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---


### QuicksightThemeConfigurationUiColorPaletteOutputReference <a name="QuicksightThemeConfigurationUiColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccent">resetAccent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccentForeground">resetAccentForeground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDanger">resetDanger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDangerForeground">resetDangerForeground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimensionForeground">resetDimensionForeground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasure">resetMeasure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasureForeground">resetMeasureForeground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryBackground">resetPrimaryBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryForeground">resetPrimaryForeground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryBackground">resetSecondaryBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryForeground">resetSecondaryForeground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccess">resetSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccessForeground">resetSuccessForeground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarning">resetWarning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarningForeground">resetWarningForeground</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccent` <a name="resetAccent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccent"></a>

```typescript
public resetAccent(): void
```

##### `resetAccentForeground` <a name="resetAccentForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccentForeground"></a>

```typescript
public resetAccentForeground(): void
```

##### `resetDanger` <a name="resetDanger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDanger"></a>

```typescript
public resetDanger(): void
```

##### `resetDangerForeground` <a name="resetDangerForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDangerForeground"></a>

```typescript
public resetDangerForeground(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetDimensionForeground` <a name="resetDimensionForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimensionForeground"></a>

```typescript
public resetDimensionForeground(): void
```

##### `resetMeasure` <a name="resetMeasure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasure"></a>

```typescript
public resetMeasure(): void
```

##### `resetMeasureForeground` <a name="resetMeasureForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasureForeground"></a>

```typescript
public resetMeasureForeground(): void
```

##### `resetPrimaryBackground` <a name="resetPrimaryBackground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryBackground"></a>

```typescript
public resetPrimaryBackground(): void
```

##### `resetPrimaryForeground` <a name="resetPrimaryForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryForeground"></a>

```typescript
public resetPrimaryForeground(): void
```

##### `resetSecondaryBackground` <a name="resetSecondaryBackground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryBackground"></a>

```typescript
public resetSecondaryBackground(): void
```

##### `resetSecondaryForeground` <a name="resetSecondaryForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryForeground"></a>

```typescript
public resetSecondaryForeground(): void
```

##### `resetSuccess` <a name="resetSuccess" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccess"></a>

```typescript
public resetSuccess(): void
```

##### `resetSuccessForeground` <a name="resetSuccessForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccessForeground"></a>

```typescript
public resetSuccessForeground(): void
```

##### `resetWarning` <a name="resetWarning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarning"></a>

```typescript
public resetWarning(): void
```

##### `resetWarningForeground` <a name="resetWarningForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarningForeground"></a>

```typescript
public resetWarningForeground(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForegroundInput">accentForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentInput">accentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForegroundInput">dangerForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerInput">dangerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForegroundInput">dimensionForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForegroundInput">measureForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureInput">measureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackgroundInput">primaryBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForegroundInput">primaryForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackgroundInput">secondaryBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForegroundInput">secondaryForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForegroundInput">successForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successInput">successInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForegroundInput">warningForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningInput">warningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground">accentForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground">dangerForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimensionForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground">measureForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground">primaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground">primaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground">successForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground">warningForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accentForegroundInput`<sup>Optional</sup> <a name="accentForegroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForegroundInput"></a>

```typescript
public readonly accentForegroundInput: string;
```

- *Type:* string

---

##### `accentInput`<sup>Optional</sup> <a name="accentInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentInput"></a>

```typescript
public readonly accentInput: string;
```

- *Type:* string

---

##### `dangerForegroundInput`<sup>Optional</sup> <a name="dangerForegroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForegroundInput"></a>

```typescript
public readonly dangerForegroundInput: string;
```

- *Type:* string

---

##### `dangerInput`<sup>Optional</sup> <a name="dangerInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerInput"></a>

```typescript
public readonly dangerInput: string;
```

- *Type:* string

---

##### `dimensionForegroundInput`<sup>Optional</sup> <a name="dimensionForegroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForegroundInput"></a>

```typescript
public readonly dimensionForegroundInput: string;
```

- *Type:* string

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: string;
```

- *Type:* string

---

##### `measureForegroundInput`<sup>Optional</sup> <a name="measureForegroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForegroundInput"></a>

```typescript
public readonly measureForegroundInput: string;
```

- *Type:* string

---

##### `measureInput`<sup>Optional</sup> <a name="measureInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureInput"></a>

```typescript
public readonly measureInput: string;
```

- *Type:* string

---

##### `primaryBackgroundInput`<sup>Optional</sup> <a name="primaryBackgroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackgroundInput"></a>

```typescript
public readonly primaryBackgroundInput: string;
```

- *Type:* string

---

##### `primaryForegroundInput`<sup>Optional</sup> <a name="primaryForegroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForegroundInput"></a>

```typescript
public readonly primaryForegroundInput: string;
```

- *Type:* string

---

##### `secondaryBackgroundInput`<sup>Optional</sup> <a name="secondaryBackgroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackgroundInput"></a>

```typescript
public readonly secondaryBackgroundInput: string;
```

- *Type:* string

---

##### `secondaryForegroundInput`<sup>Optional</sup> <a name="secondaryForegroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForegroundInput"></a>

```typescript
public readonly secondaryForegroundInput: string;
```

- *Type:* string

---

##### `successForegroundInput`<sup>Optional</sup> <a name="successForegroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForegroundInput"></a>

```typescript
public readonly successForegroundInput: string;
```

- *Type:* string

---

##### `successInput`<sup>Optional</sup> <a name="successInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successInput"></a>

```typescript
public readonly successInput: string;
```

- *Type:* string

---

##### `warningForegroundInput`<sup>Optional</sup> <a name="warningForegroundInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForegroundInput"></a>

```typescript
public readonly warningForegroundInput: string;
```

- *Type:* string

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningInput"></a>

```typescript
public readonly warningInput: string;
```

- *Type:* string

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent"></a>

```typescript
public readonly accent: string;
```

- *Type:* string

---

##### `accentForeground`<sup>Required</sup> <a name="accentForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```typescript
public readonly accentForeground: string;
```

- *Type:* string

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger"></a>

```typescript
public readonly danger: string;
```

- *Type:* string

---

##### `dangerForeground`<sup>Required</sup> <a name="dangerForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```typescript
public readonly dangerForeground: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `dimensionForeground`<sup>Required</sup> <a name="dimensionForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```typescript
public readonly dimensionForeground: string;
```

- *Type:* string

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure"></a>

```typescript
public readonly measure: string;
```

- *Type:* string

---

##### `measureForeground`<sup>Required</sup> <a name="measureForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```typescript
public readonly measureForeground: string;
```

- *Type:* string

---

##### `primaryBackground`<sup>Required</sup> <a name="primaryBackground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```typescript
public readonly primaryBackground: string;
```

- *Type:* string

---

##### `primaryForeground`<sup>Required</sup> <a name="primaryForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```typescript
public readonly primaryForeground: string;
```

- *Type:* string

---

##### `secondaryBackground`<sup>Required</sup> <a name="secondaryBackground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```typescript
public readonly secondaryBackground: string;
```

- *Type:* string

---

##### `secondaryForeground`<sup>Required</sup> <a name="secondaryForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```typescript
public readonly secondaryForeground: string;
```

- *Type:* string

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.success"></a>

```typescript
public readonly success: string;
```

- *Type:* string

---

##### `successForeground`<sup>Required</sup> <a name="successForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```typescript
public readonly successForeground: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `warningForeground`<sup>Required</sup> <a name="warningForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```typescript
public readonly warningForeground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeConfigurationUiColorPalette;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---


### QuicksightThemePermissionsList <a name="QuicksightThemePermissionsList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemePermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.get"></a>

```typescript
public get(index: number): QuicksightThemePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>[]

---


### QuicksightThemePermissionsOutputReference <a name="QuicksightThemePermissionsOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemePermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>

---


### QuicksightThemeTagsList <a name="QuicksightThemeTagsList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.get"></a>

```typescript
public get(index: number): QuicksightThemeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>[]

---


### QuicksightThemeTagsOutputReference <a name="QuicksightThemeTagsOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightThemeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>

---


### QuicksightThemeVersionConfigurationDataColorPaletteOutputReference <a name="QuicksightThemeVersionConfigurationDataColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.emptyFillColor">emptyFillColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.minMaxGradient">minMaxGradient</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette">QuicksightThemeVersionConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.colors"></a>

```typescript
public readonly colors: string[];
```

- *Type:* string[]

---

##### `emptyFillColor`<sup>Required</sup> <a name="emptyFillColor" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```typescript
public readonly emptyFillColor: string;
```

- *Type:* string

---

##### `minMaxGradient`<sup>Required</sup> <a name="minMaxGradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```typescript
public readonly minMaxGradient: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationDataColorPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette">QuicksightThemeVersionConfigurationDataColorPalette</a>

---


### QuicksightThemeVersionConfigurationOutputReference <a name="QuicksightThemeVersionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.dataColorPalette">dataColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference">QuicksightThemeVersionConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference">QuicksightThemeVersionConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference">QuicksightThemeVersionConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.uiColorPalette">uiColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference">QuicksightThemeVersionConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfiguration">QuicksightThemeVersionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataColorPalette`<sup>Required</sup> <a name="dataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.dataColorPalette"></a>

```typescript
public readonly dataColorPalette: QuicksightThemeVersionConfigurationDataColorPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference">QuicksightThemeVersionConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.sheet"></a>

```typescript
public readonly sheet: QuicksightThemeVersionConfigurationSheetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference">QuicksightThemeVersionConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.typography"></a>

```typescript
public readonly typography: QuicksightThemeVersionConfigurationTypographyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference">QuicksightThemeVersionConfigurationTypographyOutputReference</a>

---

##### `uiColorPalette`<sup>Required</sup> <a name="uiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.uiColorPalette"></a>

```typescript
public readonly uiColorPalette: QuicksightThemeVersionConfigurationUiColorPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference">QuicksightThemeVersionConfigurationUiColorPaletteOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfiguration">QuicksightThemeVersionConfiguration</a>

---


### QuicksightThemeVersionConfigurationSheetOutputReference <a name="QuicksightThemeVersionConfigurationSheetOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference">QuicksightThemeVersionConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.tileLayout">tileLayout</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheet">QuicksightThemeVersionConfigurationSheet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.tile"></a>

```typescript
public readonly tile: QuicksightThemeVersionConfigurationSheetTileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference">QuicksightThemeVersionConfigurationSheetTileOutputReference</a>

---

##### `tileLayout`<sup>Required</sup> <a name="tileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.tileLayout"></a>

```typescript
public readonly tileLayout: QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationSheet;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheet">QuicksightThemeVersionConfigurationSheet</a>

---


### QuicksightThemeVersionConfigurationSheetTileBorderOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileBorderOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder">QuicksightThemeVersionConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationSheetTileBorder;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder">QuicksightThemeVersionConfigurationSheetTileBorder</a>

---


### QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter">QuicksightThemeVersionConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationSheetTileLayoutGutter;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter">QuicksightThemeVersionConfigurationSheetTileLayoutGutter</a>

---


### QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin">QuicksightThemeVersionConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationSheetTileLayoutMargin;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin">QuicksightThemeVersionConfigurationSheetTileLayoutMargin</a>

---


### QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout">QuicksightThemeVersionConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```typescript
public readonly gutter: QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```typescript
public readonly margin: QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationSheetTileLayout;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout">QuicksightThemeVersionConfigurationSheetTileLayout</a>

---


### QuicksightThemeVersionConfigurationSheetTileOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference">QuicksightThemeVersionConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTile">QuicksightThemeVersionConfigurationSheetTile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.border"></a>

```typescript
public readonly border: QuicksightThemeVersionConfigurationSheetTileBorderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference">QuicksightThemeVersionConfigurationSheetTileBorderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationSheetTile;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTile">QuicksightThemeVersionConfigurationSheetTile</a>

---


### QuicksightThemeVersionConfigurationTypographyFontFamiliesList <a name="QuicksightThemeVersionConfigurationTypographyFontFamiliesList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.get"></a>

```typescript
public get(index: number): QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference <a name="QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">fontFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies">QuicksightThemeVersionConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationTypographyFontFamilies;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies">QuicksightThemeVersionConfigurationTypographyFontFamilies</a>

---


### QuicksightThemeVersionConfigurationTypographyOutputReference <a name="QuicksightThemeVersionConfigurationTypographyOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.fontFamilies">fontFamilies</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList">QuicksightThemeVersionConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypography">QuicksightThemeVersionConfigurationTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamilies`<sup>Required</sup> <a name="fontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.fontFamilies"></a>

```typescript
public readonly fontFamilies: QuicksightThemeVersionConfigurationTypographyFontFamiliesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList">QuicksightThemeVersionConfigurationTypographyFontFamiliesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationTypography;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypography">QuicksightThemeVersionConfigurationTypography</a>

---


### QuicksightThemeVersionConfigurationUiColorPaletteOutputReference <a name="QuicksightThemeVersionConfigurationUiColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accentForeground">accentForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dangerForeground">dangerForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimensionForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measureForeground">measureForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryBackground">primaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryForeground">primaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.successForeground">successForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warningForeground">warningForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette">QuicksightThemeVersionConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accent"></a>

```typescript
public readonly accent: string;
```

- *Type:* string

---

##### `accentForeground`<sup>Required</sup> <a name="accentForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```typescript
public readonly accentForeground: string;
```

- *Type:* string

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.danger"></a>

```typescript
public readonly danger: string;
```

- *Type:* string

---

##### `dangerForeground`<sup>Required</sup> <a name="dangerForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```typescript
public readonly dangerForeground: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `dimensionForeground`<sup>Required</sup> <a name="dimensionForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```typescript
public readonly dimensionForeground: string;
```

- *Type:* string

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measure"></a>

```typescript
public readonly measure: string;
```

- *Type:* string

---

##### `measureForeground`<sup>Required</sup> <a name="measureForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```typescript
public readonly measureForeground: string;
```

- *Type:* string

---

##### `primaryBackground`<sup>Required</sup> <a name="primaryBackground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```typescript
public readonly primaryBackground: string;
```

- *Type:* string

---

##### `primaryForeground`<sup>Required</sup> <a name="primaryForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```typescript
public readonly primaryForeground: string;
```

- *Type:* string

---

##### `secondaryBackground`<sup>Required</sup> <a name="secondaryBackground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```typescript
public readonly secondaryBackground: string;
```

- *Type:* string

---

##### `secondaryForeground`<sup>Required</sup> <a name="secondaryForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```typescript
public readonly secondaryForeground: string;
```

- *Type:* string

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.success"></a>

```typescript
public readonly success: string;
```

- *Type:* string

---

##### `successForeground`<sup>Required</sup> <a name="successForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```typescript
public readonly successForeground: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `warningForeground`<sup>Required</sup> <a name="warningForeground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```typescript
public readonly warningForeground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionConfigurationUiColorPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette">QuicksightThemeVersionConfigurationUiColorPalette</a>

---


### QuicksightThemeVersionErrorsList <a name="QuicksightThemeVersionErrorsList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.get"></a>

```typescript
public get(index: number): QuicksightThemeVersionErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### QuicksightThemeVersionErrorsOutputReference <a name="QuicksightThemeVersionErrorsOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrors">QuicksightThemeVersionErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersionErrors;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrors">QuicksightThemeVersionErrors</a>

---


### QuicksightThemeVersionOutputReference <a name="QuicksightThemeVersionOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer"></a>

```typescript
import { quicksightTheme } from '@cdktn/provider-awscc'

new quicksightTheme.QuicksightThemeVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.baseThemeId">baseThemeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference">QuicksightThemeVersionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList">QuicksightThemeVersionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersion">QuicksightThemeVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `baseThemeId`<sup>Required</sup> <a name="baseThemeId" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.baseThemeId"></a>

```typescript
public readonly baseThemeId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.configuration"></a>

```typescript
public readonly configuration: QuicksightThemeVersionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference">QuicksightThemeVersionConfigurationOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.errors"></a>

```typescript
public readonly errors: QuicksightThemeVersionErrorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList">QuicksightThemeVersionErrorsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightThemeVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersion">QuicksightThemeVersion</a>

---




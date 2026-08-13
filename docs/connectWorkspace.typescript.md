# `connectWorkspace` Submodule <a name="`connectWorkspace` Submodule" id="@cdktn/provider-awscc.connectWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectWorkspace <a name="ConnectWorkspace" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace awscc_connect_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspace(scope: Construct, id: string, config: ConnectWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig">ConnectWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig">ConnectWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia">putMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages">putPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme">putTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetAssociations">resetAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetMedia">resetMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetPages">resetPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMedia` <a name="putMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia"></a>

```typescript
public putMedia(value: IResolvable | ConnectWorkspaceMedia[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]

---

##### `putPages` <a name="putPages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages"></a>

```typescript
public putPages(value: IResolvable | ConnectWorkspacePages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectWorkspaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]

---

##### `putTheme` <a name="putTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme"></a>

```typescript
public putTheme(value: ConnectWorkspaceTheme): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---

##### `resetAssociations` <a name="resetAssociations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetAssociations"></a>

```typescript
public resetAssociations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMedia` <a name="resetMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetMedia"></a>

```typescript
public resetMedia(): void
```

##### `resetPages` <a name="resetPages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetPages"></a>

```typescript
public resetPages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTheme"></a>

```typescript
public resetTheme(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

connectWorkspace.ConnectWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

connectWorkspace.ConnectWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

connectWorkspace.ConnectWorkspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

connectWorkspace.ConnectWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.media">media</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList">ConnectWorkspaceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pages">pages</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList">ConnectWorkspacePagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList">ConnectWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference">ConnectWorkspaceThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associationsInput">associationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.mediaInput">mediaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pagesInput">pagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.themeInput">themeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associations">associations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `media`<sup>Required</sup> <a name="media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.media"></a>

```typescript
public readonly media: ConnectWorkspaceMediaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList">ConnectWorkspaceMediaList</a>

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pages"></a>

```typescript
public readonly pages: ConnectWorkspacePagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList">ConnectWorkspacePagesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tags"></a>

```typescript
public readonly tags: ConnectWorkspaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList">ConnectWorkspaceTagsList</a>

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.theme"></a>

```typescript
public readonly theme: ConnectWorkspaceThemeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference">ConnectWorkspaceThemeOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `associationsInput`<sup>Optional</sup> <a name="associationsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associationsInput"></a>

```typescript
public readonly associationsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `mediaInput`<sup>Optional</sup> <a name="mediaInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.mediaInput"></a>

```typescript
public readonly mediaInput: IResolvable | ConnectWorkspaceMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pagesInput`<sup>Optional</sup> <a name="pagesInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pagesInput"></a>

```typescript
public readonly pagesInput: IResolvable | ConnectWorkspacePages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.themeInput"></a>

```typescript
public readonly themeInput: IResolvable | ConnectWorkspaceTheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associations"></a>

```typescript
public readonly associations: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectWorkspaceConfig <a name="ConnectWorkspaceConfig" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceConfig: connectWorkspace.ConnectWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.name">name</a></code> | <code>string</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.associations">associations</a></code> | <code>string[]</code> | The resource ARNs associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.description">description</a></code> | <code>string</code> | The description of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.media">media</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]</code> | The media items for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.pages">pages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]</code> | The pages associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | The theme configuration for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.title">title</a></code> | <code>string</code> | The title of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.visibility">visibility</a></code> | <code>string</code> | The visibility of the workspace. Will always be set to ASSIGNED oninitial creation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#instance_arn ConnectWorkspace#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#name ConnectWorkspace#name}

---

##### `associations`<sup>Optional</sup> <a name="associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.associations"></a>

```typescript
public readonly associations: string[];
```

- *Type:* string[]

The resource ARNs associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#associations ConnectWorkspace#associations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#description ConnectWorkspace#description}

---

##### `media`<sup>Optional</sup> <a name="media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.media"></a>

```typescript
public readonly media: IResolvable | ConnectWorkspaceMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]

The media items for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#media ConnectWorkspace#media}

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.pages"></a>

```typescript
public readonly pages: IResolvable | ConnectWorkspacePages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]

The pages associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#pages ConnectWorkspace#pages}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#tags ConnectWorkspace#tags}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.theme"></a>

```typescript
public readonly theme: ConnectWorkspaceTheme;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

The theme configuration for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#theme ConnectWorkspace#theme}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#title ConnectWorkspace#title}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

The visibility of the workspace. Will always be set to ASSIGNED oninitial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#visibility ConnectWorkspace#visibility}

---

### ConnectWorkspaceMedia <a name="ConnectWorkspaceMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceMedia: connectWorkspace.ConnectWorkspaceMedia = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#source ConnectWorkspace#source}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.type">type</a></code> | <code>string</code> | The type of media. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#source ConnectWorkspace#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of media.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#type ConnectWorkspace#type}

---

### ConnectWorkspacePages <a name="ConnectWorkspacePages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspacePages: connectWorkspace.ConnectWorkspacePages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.inputData">inputData</a></code> | <code>string</code> | The input data for the page. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.page">page</a></code> | <code>string</code> | The page identifier. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.resourceArn">resourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the resource associated with the page. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.slug">slug</a></code> | <code>string</code> | The slug for the page. |

---

##### `inputData`<sup>Optional</sup> <a name="inputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.inputData"></a>

```typescript
public readonly inputData: string;
```

- *Type:* string

The input data for the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#input_data ConnectWorkspace#input_data}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

The page identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page ConnectWorkspace#page}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the resource associated with the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#resource_arn ConnectWorkspace#resource_arn}

---

##### `slug`<sup>Optional</sup> <a name="slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

The slug for the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#slug ConnectWorkspace#slug}

---

### ConnectWorkspaceTags <a name="ConnectWorkspaceTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceTags: connectWorkspace.ConnectWorkspaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#key ConnectWorkspace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#value ConnectWorkspace#value}

---

### ConnectWorkspaceTheme <a name="ConnectWorkspaceTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceTheme: connectWorkspace.ConnectWorkspaceTheme = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.dark">dark</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.light">light</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#light ConnectWorkspace#light}. |

---

##### `dark`<sup>Optional</sup> <a name="dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.dark"></a>

```typescript
public readonly dark: ConnectWorkspaceThemeDark;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}.

---

##### `light`<sup>Optional</sup> <a name="light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.light"></a>

```typescript
public readonly light: ConnectWorkspaceThemeLight;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#light ConnectWorkspace#light}.

---

### ConnectWorkspaceThemeDark <a name="ConnectWorkspaceThemeDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeDark: connectWorkspace.ConnectWorkspaceThemeDark = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}. |

---

##### `palette`<sup>Optional</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.palette"></a>

```typescript
public readonly palette: ConnectWorkspaceThemeDarkPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

##### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.typography"></a>

```typescript
public readonly typography: ConnectWorkspaceThemeDarkTypography;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

### ConnectWorkspaceThemeDarkPalette <a name="ConnectWorkspaceThemeDarkPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeDarkPalette: connectWorkspace.ConnectWorkspaceThemeDarkPalette = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#header ConnectWorkspace#header}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}. |

---

##### `canvas`<sup>Optional</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.canvas"></a>

```typescript
public readonly canvas: ConnectWorkspaceThemeDarkPaletteCanvas;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.header"></a>

```typescript
public readonly header: ConnectWorkspaceThemeDarkPaletteHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

##### `navigation`<sup>Optional</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.navigation"></a>

```typescript
public readonly navigation: ConnectWorkspaceThemeDarkPaletteNavigation;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.primary"></a>

```typescript
public readonly primary: ConnectWorkspaceThemeDarkPalettePrimary;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

### ConnectWorkspaceThemeDarkPaletteCanvas <a name="ConnectWorkspaceThemeDarkPaletteCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeDarkPaletteCanvas: connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.activeBackground">activeBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.containerBackground">containerBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.pageBackground">pageBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}. |

---

##### `activeBackground`<sup>Optional</sup> <a name="activeBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.activeBackground"></a>

```typescript
public readonly activeBackground: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

##### `containerBackground`<sup>Optional</sup> <a name="containerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.containerBackground"></a>

```typescript
public readonly containerBackground: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

##### `pageBackground`<sup>Optional</sup> <a name="pageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.pageBackground"></a>

```typescript
public readonly pageBackground: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

### ConnectWorkspaceThemeDarkPaletteHeader <a name="ConnectWorkspaceThemeDarkPaletteHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeDarkPaletteHeader: connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.background">background</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.invertActionsColors">invertActionsColors</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.textHover">textHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `invertActionsColors`<sup>Optional</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `textHover`<sup>Optional</sup> <a name="textHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeDarkPaletteNavigation <a name="ConnectWorkspaceThemeDarkPaletteNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeDarkPaletteNavigation: connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.background">background</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.invertActionsColors">invertActionsColors</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textActive">textActive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundActive">textBackgroundActive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundHover">textBackgroundHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textHover">textHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `invertActionsColors`<sup>Optional</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `textActive`<sup>Optional</sup> <a name="textActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textActive"></a>

```typescript
public readonly textActive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

##### `textBackgroundActive`<sup>Optional</sup> <a name="textBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundActive"></a>

```typescript
public readonly textBackgroundActive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

##### `textBackgroundHover`<sup>Optional</sup> <a name="textBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundHover"></a>

```typescript
public readonly textBackgroundHover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

##### `textHover`<sup>Optional</sup> <a name="textHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeDarkPalettePrimary <a name="ConnectWorkspaceThemeDarkPalettePrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeDarkPalettePrimary: connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.active">active</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active ConnectWorkspace#active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.contrastText">contrastText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.active"></a>

```typescript
public readonly active: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

##### `contrastText`<sup>Optional</sup> <a name="contrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.contrastText"></a>

```typescript
public readonly contrastText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeDarkTypography <a name="ConnectWorkspaceThemeDarkTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeDarkTypography: connectWorkspace.ConnectWorkspaceThemeDarkTypography = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.property.fontFamily">fontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}. |

---

##### `fontFamily`<sup>Optional</sup> <a name="fontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.property.fontFamily"></a>

```typescript
public readonly fontFamily: ConnectWorkspaceThemeDarkTypographyFontFamily;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

### ConnectWorkspaceThemeDarkTypographyFontFamily <a name="ConnectWorkspaceThemeDarkTypographyFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeDarkTypographyFontFamily: connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeLight <a name="ConnectWorkspaceThemeLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeLight: connectWorkspace.ConnectWorkspaceThemeLight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}. |

---

##### `palette`<sup>Optional</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.palette"></a>

```typescript
public readonly palette: ConnectWorkspaceThemeLightPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

##### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.typography"></a>

```typescript
public readonly typography: ConnectWorkspaceThemeLightTypography;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

### ConnectWorkspaceThemeLightPalette <a name="ConnectWorkspaceThemeLightPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeLightPalette: connectWorkspace.ConnectWorkspaceThemeLightPalette = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#header ConnectWorkspace#header}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}. |

---

##### `canvas`<sup>Optional</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.canvas"></a>

```typescript
public readonly canvas: ConnectWorkspaceThemeLightPaletteCanvas;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.header"></a>

```typescript
public readonly header: ConnectWorkspaceThemeLightPaletteHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

##### `navigation`<sup>Optional</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.navigation"></a>

```typescript
public readonly navigation: ConnectWorkspaceThemeLightPaletteNavigation;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.primary"></a>

```typescript
public readonly primary: ConnectWorkspaceThemeLightPalettePrimary;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

### ConnectWorkspaceThemeLightPaletteCanvas <a name="ConnectWorkspaceThemeLightPaletteCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeLightPaletteCanvas: connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.activeBackground">activeBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.containerBackground">containerBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.pageBackground">pageBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}. |

---

##### `activeBackground`<sup>Optional</sup> <a name="activeBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.activeBackground"></a>

```typescript
public readonly activeBackground: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

##### `containerBackground`<sup>Optional</sup> <a name="containerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.containerBackground"></a>

```typescript
public readonly containerBackground: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

##### `pageBackground`<sup>Optional</sup> <a name="pageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.pageBackground"></a>

```typescript
public readonly pageBackground: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

### ConnectWorkspaceThemeLightPaletteHeader <a name="ConnectWorkspaceThemeLightPaletteHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeLightPaletteHeader: connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.background">background</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.invertActionsColors">invertActionsColors</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.textHover">textHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `invertActionsColors`<sup>Optional</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `textHover`<sup>Optional</sup> <a name="textHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeLightPaletteNavigation <a name="ConnectWorkspaceThemeLightPaletteNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeLightPaletteNavigation: connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.background">background</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.invertActionsColors">invertActionsColors</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textActive">textActive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundActive">textBackgroundActive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundHover">textBackgroundHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textHover">textHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `invertActionsColors`<sup>Optional</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `textActive`<sup>Optional</sup> <a name="textActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textActive"></a>

```typescript
public readonly textActive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

##### `textBackgroundActive`<sup>Optional</sup> <a name="textBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundActive"></a>

```typescript
public readonly textBackgroundActive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

##### `textBackgroundHover`<sup>Optional</sup> <a name="textBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundHover"></a>

```typescript
public readonly textBackgroundHover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

##### `textHover`<sup>Optional</sup> <a name="textHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeLightPalettePrimary <a name="ConnectWorkspaceThemeLightPalettePrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeLightPalettePrimary: connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.active">active</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active ConnectWorkspace#active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.contrastText">contrastText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.active"></a>

```typescript
public readonly active: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

##### `contrastText`<sup>Optional</sup> <a name="contrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.contrastText"></a>

```typescript
public readonly contrastText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeLightTypography <a name="ConnectWorkspaceThemeLightTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeLightTypography: connectWorkspace.ConnectWorkspaceThemeLightTypography = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.property.fontFamily">fontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}. |

---

##### `fontFamily`<sup>Optional</sup> <a name="fontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.property.fontFamily"></a>

```typescript
public readonly fontFamily: ConnectWorkspaceThemeLightTypographyFontFamily;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

### ConnectWorkspaceThemeLightTypographyFontFamily <a name="ConnectWorkspaceThemeLightTypographyFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

const connectWorkspaceThemeLightTypographyFontFamily: connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectWorkspaceMediaList <a name="ConnectWorkspaceMediaList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceMediaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get"></a>

```typescript
public get(index: number): ConnectWorkspaceMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]

---


### ConnectWorkspaceMediaOutputReference <a name="ConnectWorkspaceMediaOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceMediaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceMedia;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>

---


### ConnectWorkspacePagesList <a name="ConnectWorkspacePagesList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspacePagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get"></a>

```typescript
public get(index: number): ConnectWorkspacePagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspacePages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]

---


### ConnectWorkspacePagesOutputReference <a name="ConnectWorkspacePagesOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspacePagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetInputData">resetInputData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetSlug">resetSlug</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputData` <a name="resetInputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetInputData"></a>

```typescript
public resetInputData(): void
```

##### `resetPage` <a name="resetPage" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetPage"></a>

```typescript
public resetPage(): void
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```

##### `resetSlug` <a name="resetSlug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetSlug"></a>

```typescript
public resetSlug(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputDataInput">inputDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.pageInput">pageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slugInput">slugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputData">inputData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.page">page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputDataInput`<sup>Optional</sup> <a name="inputDataInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputDataInput"></a>

```typescript
public readonly inputDataInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.pageInput"></a>

```typescript
public readonly pageInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `slugInput`<sup>Optional</sup> <a name="slugInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slugInput"></a>

```typescript
public readonly slugInput: string;
```

- *Type:* string

---

##### `inputData`<sup>Required</sup> <a name="inputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputData"></a>

```typescript
public readonly inputData: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspacePages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>

---


### ConnectWorkspaceTagsList <a name="ConnectWorkspaceTagsList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get"></a>

```typescript
public get(index: number): ConnectWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]

---


### ConnectWorkspaceTagsOutputReference <a name="ConnectWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>

---


### ConnectWorkspaceThemeDarkOutputReference <a name="ConnectWorkspaceThemeDarkOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeDarkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette">putPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography">putTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetPalette">resetPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetTypography">resetTypography</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPalette` <a name="putPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette"></a>

```typescript
public putPalette(value: ConnectWorkspaceThemeDarkPalette): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---

##### `putTypography` <a name="putTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography"></a>

```typescript
public putTypography(value: ConnectWorkspaceThemeDarkTypography): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---

##### `resetPalette` <a name="resetPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetPalette"></a>

```typescript
public resetPalette(): void
```

##### `resetTypography` <a name="resetTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetTypography"></a>

```typescript
public resetTypography(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference">ConnectWorkspaceThemeDarkPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference">ConnectWorkspaceThemeDarkTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.paletteInput">paletteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typographyInput">typographyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `palette`<sup>Required</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.palette"></a>

```typescript
public readonly palette: ConnectWorkspaceThemeDarkPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference">ConnectWorkspaceThemeDarkPaletteOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typography"></a>

```typescript
public readonly typography: ConnectWorkspaceThemeDarkTypographyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference">ConnectWorkspaceThemeDarkTypographyOutputReference</a>

---

##### `paletteInput`<sup>Optional</sup> <a name="paletteInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.paletteInput"></a>

```typescript
public readonly paletteInput: IResolvable | ConnectWorkspaceThemeDarkPalette;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---

##### `typographyInput`<sup>Optional</sup> <a name="typographyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typographyInput"></a>

```typescript
public readonly typographyInput: IResolvable | ConnectWorkspaceThemeDarkTypography;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeDark;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---


### ConnectWorkspaceThemeDarkPaletteCanvasOutputReference <a name="ConnectWorkspaceThemeDarkPaletteCanvasOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetActiveBackground">resetActiveBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetContainerBackground">resetContainerBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetPageBackground">resetPageBackground</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveBackground` <a name="resetActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetActiveBackground"></a>

```typescript
public resetActiveBackground(): void
```

##### `resetContainerBackground` <a name="resetContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetContainerBackground"></a>

```typescript
public resetContainerBackground(): void
```

##### `resetPageBackground` <a name="resetPageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetPageBackground"></a>

```typescript
public resetPageBackground(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackgroundInput">activeBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackgroundInput">containerBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackgroundInput">pageBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground">activeBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground">containerBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground">pageBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeBackgroundInput`<sup>Optional</sup> <a name="activeBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackgroundInput"></a>

```typescript
public readonly activeBackgroundInput: string;
```

- *Type:* string

---

##### `containerBackgroundInput`<sup>Optional</sup> <a name="containerBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackgroundInput"></a>

```typescript
public readonly containerBackgroundInput: string;
```

- *Type:* string

---

##### `pageBackgroundInput`<sup>Optional</sup> <a name="pageBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackgroundInput"></a>

```typescript
public readonly pageBackgroundInput: string;
```

- *Type:* string

---

##### `activeBackground`<sup>Required</sup> <a name="activeBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground"></a>

```typescript
public readonly activeBackground: string;
```

- *Type:* string

---

##### `containerBackground`<sup>Required</sup> <a name="containerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground"></a>

```typescript
public readonly containerBackground: string;
```

- *Type:* string

---

##### `pageBackground`<sup>Required</sup> <a name="pageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground"></a>

```typescript
public readonly pageBackground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeDarkPaletteCanvas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---


### ConnectWorkspaceThemeDarkPaletteHeaderOutputReference <a name="ConnectWorkspaceThemeDarkPaletteHeaderOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetBackground">resetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetInvertActionsColors">resetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetTextHover">resetTextHover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackground` <a name="resetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetBackground"></a>

```typescript
public resetBackground(): void
```

##### `resetInvertActionsColors` <a name="resetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetInvertActionsColors"></a>

```typescript
public resetInvertActionsColors(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTextHover` <a name="resetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetTextHover"></a>

```typescript
public resetTextHover(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.backgroundInput">backgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColorsInput">invertActionsColorsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHoverInput">textHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background">background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover">textHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundInput`<sup>Optional</sup> <a name="backgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.backgroundInput"></a>

```typescript
public readonly backgroundInput: string;
```

- *Type:* string

---

##### `invertActionsColorsInput`<sup>Optional</sup> <a name="invertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColorsInput"></a>

```typescript
public readonly invertActionsColorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `textHoverInput`<sup>Optional</sup> <a name="textHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHoverInput"></a>

```typescript
public readonly textHoverInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeDarkPaletteHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---


### ConnectWorkspaceThemeDarkPaletteNavigationOutputReference <a name="ConnectWorkspaceThemeDarkPaletteNavigationOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetBackground">resetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetInvertActionsColors">resetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextActive">resetTextActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundActive">resetTextBackgroundActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundHover">resetTextBackgroundHover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextHover">resetTextHover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackground` <a name="resetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetBackground"></a>

```typescript
public resetBackground(): void
```

##### `resetInvertActionsColors` <a name="resetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetInvertActionsColors"></a>

```typescript
public resetInvertActionsColors(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTextActive` <a name="resetTextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextActive"></a>

```typescript
public resetTextActive(): void
```

##### `resetTextBackgroundActive` <a name="resetTextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundActive"></a>

```typescript
public resetTextBackgroundActive(): void
```

##### `resetTextBackgroundHover` <a name="resetTextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundHover"></a>

```typescript
public resetTextBackgroundHover(): void
```

##### `resetTextHover` <a name="resetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextHover"></a>

```typescript
public resetTextHover(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.backgroundInput">backgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColorsInput">invertActionsColorsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActiveInput">textActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActiveInput">textBackgroundActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHoverInput">textBackgroundHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHoverInput">textHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background">background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive">textActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive">textBackgroundActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover">textBackgroundHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover">textHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundInput`<sup>Optional</sup> <a name="backgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.backgroundInput"></a>

```typescript
public readonly backgroundInput: string;
```

- *Type:* string

---

##### `invertActionsColorsInput`<sup>Optional</sup> <a name="invertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColorsInput"></a>

```typescript
public readonly invertActionsColorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `textActiveInput`<sup>Optional</sup> <a name="textActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActiveInput"></a>

```typescript
public readonly textActiveInput: string;
```

- *Type:* string

---

##### `textBackgroundActiveInput`<sup>Optional</sup> <a name="textBackgroundActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActiveInput"></a>

```typescript
public readonly textBackgroundActiveInput: string;
```

- *Type:* string

---

##### `textBackgroundHoverInput`<sup>Optional</sup> <a name="textBackgroundHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHoverInput"></a>

```typescript
public readonly textBackgroundHoverInput: string;
```

- *Type:* string

---

##### `textHoverInput`<sup>Optional</sup> <a name="textHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHoverInput"></a>

```typescript
public readonly textHoverInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textActive`<sup>Required</sup> <a name="textActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive"></a>

```typescript
public readonly textActive: string;
```

- *Type:* string

---

##### `textBackgroundActive`<sup>Required</sup> <a name="textBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```typescript
public readonly textBackgroundActive: string;
```

- *Type:* string

---

##### `textBackgroundHover`<sup>Required</sup> <a name="textBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```typescript
public readonly textBackgroundHover: string;
```

- *Type:* string

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeDarkPaletteNavigation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---


### ConnectWorkspaceThemeDarkPaletteOutputReference <a name="ConnectWorkspaceThemeDarkPaletteOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas">putCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation">putNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary">putPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetCanvas">resetCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetNavigation">resetNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCanvas` <a name="putCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas"></a>

```typescript
public putCanvas(value: ConnectWorkspaceThemeDarkPaletteCanvas): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---

##### `putHeader` <a name="putHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader"></a>

```typescript
public putHeader(value: ConnectWorkspaceThemeDarkPaletteHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---

##### `putNavigation` <a name="putNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation"></a>

```typescript
public putNavigation(value: ConnectWorkspaceThemeDarkPaletteNavigation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---

##### `putPrimary` <a name="putPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary"></a>

```typescript
public putPrimary(value: ConnectWorkspaceThemeDarkPalettePrimary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---

##### `resetCanvas` <a name="resetCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetCanvas"></a>

```typescript
public resetCanvas(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetNavigation` <a name="resetNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetNavigation"></a>

```typescript
public resetNavigation(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference">ConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference">ConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference">ConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference">ConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvasInput">canvasInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.headerInput">headerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigationInput">navigationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primaryInput">primaryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canvas`<sup>Required</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas"></a>

```typescript
public readonly canvas: ConnectWorkspaceThemeDarkPaletteCanvasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference">ConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.header"></a>

```typescript
public readonly header: ConnectWorkspaceThemeDarkPaletteHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference">ConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a>

---

##### `navigation`<sup>Required</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation"></a>

```typescript
public readonly navigation: ConnectWorkspaceThemeDarkPaletteNavigationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference">ConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primary"></a>

```typescript
public readonly primary: ConnectWorkspaceThemeDarkPalettePrimaryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference">ConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a>

---

##### `canvasInput`<sup>Optional</sup> <a name="canvasInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvasInput"></a>

```typescript
public readonly canvasInput: IResolvable | ConnectWorkspaceThemeDarkPaletteCanvas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ConnectWorkspaceThemeDarkPaletteHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---

##### `navigationInput`<sup>Optional</sup> <a name="navigationInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigationInput"></a>

```typescript
public readonly navigationInput: IResolvable | ConnectWorkspaceThemeDarkPaletteNavigation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: IResolvable | ConnectWorkspaceThemeDarkPalettePrimary;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeDarkPalette;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---


### ConnectWorkspaceThemeDarkPalettePrimaryOutputReference <a name="ConnectWorkspaceThemeDarkPalettePrimaryOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetContrastText">resetContrastText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActive` <a name="resetActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetContrastText` <a name="resetContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetContrastText"></a>

```typescript
public resetContrastText(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.activeInput">activeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastTextInput">contrastTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active">active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText">contrastText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.activeInput"></a>

```typescript
public readonly activeInput: string;
```

- *Type:* string

---

##### `contrastTextInput`<sup>Optional</sup> <a name="contrastTextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastTextInput"></a>

```typescript
public readonly contrastTextInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active"></a>

```typescript
public readonly active: string;
```

- *Type:* string

---

##### `contrastText`<sup>Required</sup> <a name="contrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText"></a>

```typescript
public readonly contrastText: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeDarkPalettePrimary;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---


### ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference <a name="ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeDarkTypographyFontFamily;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---


### ConnectWorkspaceThemeDarkTypographyOutputReference <a name="ConnectWorkspaceThemeDarkTypographyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily">putFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resetFontFamily">resetFontFamily</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFontFamily` <a name="putFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily"></a>

```typescript
public putFontFamily(value: ConnectWorkspaceThemeDarkTypographyFontFamily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---

##### `resetFontFamily` <a name="resetFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resetFontFamily"></a>

```typescript
public resetFontFamily(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily">fontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamilyInput">fontFamilyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a>

---

##### `fontFamilyInput`<sup>Optional</sup> <a name="fontFamilyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamilyInput"></a>

```typescript
public readonly fontFamilyInput: IResolvable | ConnectWorkspaceThemeDarkTypographyFontFamily;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeDarkTypography;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---


### ConnectWorkspaceThemeLightOutputReference <a name="ConnectWorkspaceThemeLightOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeLightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette">putPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography">putTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetPalette">resetPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetTypography">resetTypography</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPalette` <a name="putPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette"></a>

```typescript
public putPalette(value: ConnectWorkspaceThemeLightPalette): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---

##### `putTypography` <a name="putTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography"></a>

```typescript
public putTypography(value: ConnectWorkspaceThemeLightTypography): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---

##### `resetPalette` <a name="resetPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetPalette"></a>

```typescript
public resetPalette(): void
```

##### `resetTypography` <a name="resetTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetTypography"></a>

```typescript
public resetTypography(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference">ConnectWorkspaceThemeLightPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference">ConnectWorkspaceThemeLightTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.paletteInput">paletteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typographyInput">typographyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `palette`<sup>Required</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.palette"></a>

```typescript
public readonly palette: ConnectWorkspaceThemeLightPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference">ConnectWorkspaceThemeLightPaletteOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typography"></a>

```typescript
public readonly typography: ConnectWorkspaceThemeLightTypographyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference">ConnectWorkspaceThemeLightTypographyOutputReference</a>

---

##### `paletteInput`<sup>Optional</sup> <a name="paletteInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.paletteInput"></a>

```typescript
public readonly paletteInput: IResolvable | ConnectWorkspaceThemeLightPalette;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---

##### `typographyInput`<sup>Optional</sup> <a name="typographyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typographyInput"></a>

```typescript
public readonly typographyInput: IResolvable | ConnectWorkspaceThemeLightTypography;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeLight;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---


### ConnectWorkspaceThemeLightPaletteCanvasOutputReference <a name="ConnectWorkspaceThemeLightPaletteCanvasOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetActiveBackground">resetActiveBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetContainerBackground">resetContainerBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetPageBackground">resetPageBackground</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveBackground` <a name="resetActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetActiveBackground"></a>

```typescript
public resetActiveBackground(): void
```

##### `resetContainerBackground` <a name="resetContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetContainerBackground"></a>

```typescript
public resetContainerBackground(): void
```

##### `resetPageBackground` <a name="resetPageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetPageBackground"></a>

```typescript
public resetPageBackground(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackgroundInput">activeBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackgroundInput">containerBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackgroundInput">pageBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground">activeBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground">containerBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground">pageBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeBackgroundInput`<sup>Optional</sup> <a name="activeBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackgroundInput"></a>

```typescript
public readonly activeBackgroundInput: string;
```

- *Type:* string

---

##### `containerBackgroundInput`<sup>Optional</sup> <a name="containerBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackgroundInput"></a>

```typescript
public readonly containerBackgroundInput: string;
```

- *Type:* string

---

##### `pageBackgroundInput`<sup>Optional</sup> <a name="pageBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackgroundInput"></a>

```typescript
public readonly pageBackgroundInput: string;
```

- *Type:* string

---

##### `activeBackground`<sup>Required</sup> <a name="activeBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground"></a>

```typescript
public readonly activeBackground: string;
```

- *Type:* string

---

##### `containerBackground`<sup>Required</sup> <a name="containerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground"></a>

```typescript
public readonly containerBackground: string;
```

- *Type:* string

---

##### `pageBackground`<sup>Required</sup> <a name="pageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground"></a>

```typescript
public readonly pageBackground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeLightPaletteCanvas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---


### ConnectWorkspaceThemeLightPaletteHeaderOutputReference <a name="ConnectWorkspaceThemeLightPaletteHeaderOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetBackground">resetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetInvertActionsColors">resetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetTextHover">resetTextHover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackground` <a name="resetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetBackground"></a>

```typescript
public resetBackground(): void
```

##### `resetInvertActionsColors` <a name="resetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetInvertActionsColors"></a>

```typescript
public resetInvertActionsColors(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTextHover` <a name="resetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetTextHover"></a>

```typescript
public resetTextHover(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.backgroundInput">backgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColorsInput">invertActionsColorsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHoverInput">textHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background">background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover">textHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundInput`<sup>Optional</sup> <a name="backgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.backgroundInput"></a>

```typescript
public readonly backgroundInput: string;
```

- *Type:* string

---

##### `invertActionsColorsInput`<sup>Optional</sup> <a name="invertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColorsInput"></a>

```typescript
public readonly invertActionsColorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `textHoverInput`<sup>Optional</sup> <a name="textHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHoverInput"></a>

```typescript
public readonly textHoverInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeLightPaletteHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---


### ConnectWorkspaceThemeLightPaletteNavigationOutputReference <a name="ConnectWorkspaceThemeLightPaletteNavigationOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetBackground">resetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetInvertActionsColors">resetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextActive">resetTextActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundActive">resetTextBackgroundActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundHover">resetTextBackgroundHover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextHover">resetTextHover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackground` <a name="resetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetBackground"></a>

```typescript
public resetBackground(): void
```

##### `resetInvertActionsColors` <a name="resetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetInvertActionsColors"></a>

```typescript
public resetInvertActionsColors(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTextActive` <a name="resetTextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextActive"></a>

```typescript
public resetTextActive(): void
```

##### `resetTextBackgroundActive` <a name="resetTextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundActive"></a>

```typescript
public resetTextBackgroundActive(): void
```

##### `resetTextBackgroundHover` <a name="resetTextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundHover"></a>

```typescript
public resetTextBackgroundHover(): void
```

##### `resetTextHover` <a name="resetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextHover"></a>

```typescript
public resetTextHover(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.backgroundInput">backgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColorsInput">invertActionsColorsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActiveInput">textActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActiveInput">textBackgroundActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHoverInput">textBackgroundHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHoverInput">textHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background">background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive">textActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive">textBackgroundActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover">textBackgroundHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover">textHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundInput`<sup>Optional</sup> <a name="backgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.backgroundInput"></a>

```typescript
public readonly backgroundInput: string;
```

- *Type:* string

---

##### `invertActionsColorsInput`<sup>Optional</sup> <a name="invertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColorsInput"></a>

```typescript
public readonly invertActionsColorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `textActiveInput`<sup>Optional</sup> <a name="textActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActiveInput"></a>

```typescript
public readonly textActiveInput: string;
```

- *Type:* string

---

##### `textBackgroundActiveInput`<sup>Optional</sup> <a name="textBackgroundActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActiveInput"></a>

```typescript
public readonly textBackgroundActiveInput: string;
```

- *Type:* string

---

##### `textBackgroundHoverInput`<sup>Optional</sup> <a name="textBackgroundHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHoverInput"></a>

```typescript
public readonly textBackgroundHoverInput: string;
```

- *Type:* string

---

##### `textHoverInput`<sup>Optional</sup> <a name="textHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHoverInput"></a>

```typescript
public readonly textHoverInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textActive`<sup>Required</sup> <a name="textActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive"></a>

```typescript
public readonly textActive: string;
```

- *Type:* string

---

##### `textBackgroundActive`<sup>Required</sup> <a name="textBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```typescript
public readonly textBackgroundActive: string;
```

- *Type:* string

---

##### `textBackgroundHover`<sup>Required</sup> <a name="textBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```typescript
public readonly textBackgroundHover: string;
```

- *Type:* string

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeLightPaletteNavigation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---


### ConnectWorkspaceThemeLightPaletteOutputReference <a name="ConnectWorkspaceThemeLightPaletteOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas">putCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation">putNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary">putPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetCanvas">resetCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetNavigation">resetNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCanvas` <a name="putCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas"></a>

```typescript
public putCanvas(value: ConnectWorkspaceThemeLightPaletteCanvas): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---

##### `putHeader` <a name="putHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader"></a>

```typescript
public putHeader(value: ConnectWorkspaceThemeLightPaletteHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---

##### `putNavigation` <a name="putNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation"></a>

```typescript
public putNavigation(value: ConnectWorkspaceThemeLightPaletteNavigation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---

##### `putPrimary` <a name="putPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary"></a>

```typescript
public putPrimary(value: ConnectWorkspaceThemeLightPalettePrimary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---

##### `resetCanvas` <a name="resetCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetCanvas"></a>

```typescript
public resetCanvas(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetNavigation` <a name="resetNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetNavigation"></a>

```typescript
public resetNavigation(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference">ConnectWorkspaceThemeLightPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference">ConnectWorkspaceThemeLightPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference">ConnectWorkspaceThemeLightPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference">ConnectWorkspaceThemeLightPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvasInput">canvasInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.headerInput">headerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigationInput">navigationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primaryInput">primaryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canvas`<sup>Required</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvas"></a>

```typescript
public readonly canvas: ConnectWorkspaceThemeLightPaletteCanvasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference">ConnectWorkspaceThemeLightPaletteCanvasOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.header"></a>

```typescript
public readonly header: ConnectWorkspaceThemeLightPaletteHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference">ConnectWorkspaceThemeLightPaletteHeaderOutputReference</a>

---

##### `navigation`<sup>Required</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigation"></a>

```typescript
public readonly navigation: ConnectWorkspaceThemeLightPaletteNavigationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference">ConnectWorkspaceThemeLightPaletteNavigationOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primary"></a>

```typescript
public readonly primary: ConnectWorkspaceThemeLightPalettePrimaryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference">ConnectWorkspaceThemeLightPalettePrimaryOutputReference</a>

---

##### `canvasInput`<sup>Optional</sup> <a name="canvasInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvasInput"></a>

```typescript
public readonly canvasInput: IResolvable | ConnectWorkspaceThemeLightPaletteCanvas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ConnectWorkspaceThemeLightPaletteHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---

##### `navigationInput`<sup>Optional</sup> <a name="navigationInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigationInput"></a>

```typescript
public readonly navigationInput: IResolvable | ConnectWorkspaceThemeLightPaletteNavigation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: IResolvable | ConnectWorkspaceThemeLightPalettePrimary;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeLightPalette;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---


### ConnectWorkspaceThemeLightPalettePrimaryOutputReference <a name="ConnectWorkspaceThemeLightPalettePrimaryOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetContrastText">resetContrastText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActive` <a name="resetActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetContrastText` <a name="resetContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetContrastText"></a>

```typescript
public resetContrastText(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.activeInput">activeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastTextInput">contrastTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active">active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText">contrastText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.activeInput"></a>

```typescript
public readonly activeInput: string;
```

- *Type:* string

---

##### `contrastTextInput`<sup>Optional</sup> <a name="contrastTextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastTextInput"></a>

```typescript
public readonly contrastTextInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active"></a>

```typescript
public readonly active: string;
```

- *Type:* string

---

##### `contrastText`<sup>Required</sup> <a name="contrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText"></a>

```typescript
public readonly contrastText: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeLightPalettePrimary;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---


### ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference <a name="ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeLightTypographyFontFamily;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---


### ConnectWorkspaceThemeLightTypographyOutputReference <a name="ConnectWorkspaceThemeLightTypographyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily">putFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resetFontFamily">resetFontFamily</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFontFamily` <a name="putFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily"></a>

```typescript
public putFontFamily(value: ConnectWorkspaceThemeLightTypographyFontFamily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---

##### `resetFontFamily` <a name="resetFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resetFontFamily"></a>

```typescript
public resetFontFamily(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily">fontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamilyInput">fontFamilyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a>

---

##### `fontFamilyInput`<sup>Optional</sup> <a name="fontFamilyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamilyInput"></a>

```typescript
public readonly fontFamilyInput: IResolvable | ConnectWorkspaceThemeLightTypographyFontFamily;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceThemeLightTypography;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---


### ConnectWorkspaceThemeOutputReference <a name="ConnectWorkspaceThemeOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer"></a>

```typescript
import { connectWorkspace } from '@cdktn/provider-awscc'

new connectWorkspace.ConnectWorkspaceThemeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark">putDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight">putLight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetDark">resetDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetLight">resetLight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDark` <a name="putDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark"></a>

```typescript
public putDark(value: ConnectWorkspaceThemeDark): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---

##### `putLight` <a name="putLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight"></a>

```typescript
public putLight(value: ConnectWorkspaceThemeLight): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---

##### `resetDark` <a name="resetDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetDark"></a>

```typescript
public resetDark(): void
```

##### `resetLight` <a name="resetLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetLight"></a>

```typescript
public resetLight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.dark">dark</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference">ConnectWorkspaceThemeDarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.light">light</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference">ConnectWorkspaceThemeLightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.darkInput">darkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.lightInput">lightInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dark`<sup>Required</sup> <a name="dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.dark"></a>

```typescript
public readonly dark: ConnectWorkspaceThemeDarkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference">ConnectWorkspaceThemeDarkOutputReference</a>

---

##### `light`<sup>Required</sup> <a name="light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.light"></a>

```typescript
public readonly light: ConnectWorkspaceThemeLightOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference">ConnectWorkspaceThemeLightOutputReference</a>

---

##### `darkInput`<sup>Optional</sup> <a name="darkInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.darkInput"></a>

```typescript
public readonly darkInput: IResolvable | ConnectWorkspaceThemeDark;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---

##### `lightInput`<sup>Optional</sup> <a name="lightInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.lightInput"></a>

```typescript
public readonly lightInput: IResolvable | ConnectWorkspaceThemeLight;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectWorkspaceTheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---




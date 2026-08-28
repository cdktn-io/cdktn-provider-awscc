# `workspaceswebBrowserSettings` Submodule <a name="`workspaceswebBrowserSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebBrowserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebBrowserSettings <a name="WorkspaceswebBrowserSettings" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings awscc_workspacesweb_browser_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

new workspaceswebBrowserSettings.WorkspaceswebBrowserSettings(scope: Construct, id: string, config?: WorkspaceswebBrowserSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig">WorkspaceswebBrowserSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig">WorkspaceswebBrowserSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putWebContentFilteringPolicy">putWebContentFilteringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetBrowserPolicy">resetBrowserPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetWebContentFilteringPolicy">resetWebContentFilteringPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspaceswebBrowserSettingsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>[]

---

##### `putWebContentFilteringPolicy` <a name="putWebContentFilteringPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putWebContentFilteringPolicy"></a>

```typescript
public putWebContentFilteringPolicy(value: WorkspaceswebBrowserSettingsWebContentFilteringPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putWebContentFilteringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetAdditionalEncryptionContext"></a>

```typescript
public resetAdditionalEncryptionContext(): void
```

##### `resetBrowserPolicy` <a name="resetBrowserPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetBrowserPolicy"></a>

```typescript
public resetBrowserPolicy(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWebContentFilteringPolicy` <a name="resetWebContentFilteringPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetWebContentFilteringPolicy"></a>

```typescript
public resetWebContentFilteringPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebBrowserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspaceswebBrowserSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebBrowserSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebBrowserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebBrowserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.associatedPortalArns">associatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserSettingsArn">browserSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList">WorkspaceswebBrowserSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.webContentFilteringPolicy">webContentFilteringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference">WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicyInput">browserPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.webContentFilteringPolicyInput">webContentFilteringPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicy">browserPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.associatedPortalArns"></a>

```typescript
public readonly associatedPortalArns: string[];
```

- *Type:* string[]

---

##### `browserSettingsArn`<sup>Required</sup> <a name="browserSettingsArn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserSettingsArn"></a>

```typescript
public readonly browserSettingsArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tags"></a>

```typescript
public readonly tags: WorkspaceswebBrowserSettingsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList">WorkspaceswebBrowserSettingsTagsList</a>

---

##### `webContentFilteringPolicy`<sup>Required</sup> <a name="webContentFilteringPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.webContentFilteringPolicy"></a>

```typescript
public readonly webContentFilteringPolicy: WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference">WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference</a>

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContextInput"></a>

```typescript
public readonly additionalEncryptionContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `browserPolicyInput`<sup>Optional</sup> <a name="browserPolicyInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicyInput"></a>

```typescript
public readonly browserPolicyInput: string;
```

- *Type:* string

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspaceswebBrowserSettingsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>[]

---

##### `webContentFilteringPolicyInput`<sup>Optional</sup> <a name="webContentFilteringPolicyInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.webContentFilteringPolicyInput"></a>

```typescript
public readonly webContentFilteringPolicyInput: IResolvable | WorkspaceswebBrowserSettingsWebContentFilteringPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `browserPolicy`<sup>Required</sup> <a name="browserPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicy"></a>

```typescript
public readonly browserPolicy: string;
```

- *Type:* string

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebBrowserSettingsConfig <a name="WorkspaceswebBrowserSettingsConfig" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.Initializer"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

const workspaceswebBrowserSettingsConfig: workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.browserPolicy">browserPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.webContentFilteringPolicy">webContentFilteringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#web_content_filtering_policy WorkspaceswebBrowserSettings#web_content_filtering_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}.

---

##### `browserPolicy`<sup>Optional</sup> <a name="browserPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.browserPolicy"></a>

```typescript
public readonly browserPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspaceswebBrowserSettingsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}.

---

##### `webContentFilteringPolicy`<sup>Optional</sup> <a name="webContentFilteringPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.webContentFilteringPolicy"></a>

```typescript
public readonly webContentFilteringPolicy: WorkspaceswebBrowserSettingsWebContentFilteringPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#web_content_filtering_policy WorkspaceswebBrowserSettings#web_content_filtering_policy}.

---

### WorkspaceswebBrowserSettingsTags <a name="WorkspaceswebBrowserSettingsTags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.Initializer"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

const workspaceswebBrowserSettingsTags: workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#key WorkspaceswebBrowserSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#value WorkspaceswebBrowserSettings#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#key WorkspaceswebBrowserSettings#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#value WorkspaceswebBrowserSettings#value}.

---

### WorkspaceswebBrowserSettingsWebContentFilteringPolicy <a name="WorkspaceswebBrowserSettingsWebContentFilteringPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.Initializer"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

const workspaceswebBrowserSettingsWebContentFilteringPolicy: workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.allowedUrls">allowedUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#allowed_urls WorkspaceswebBrowserSettings#allowed_urls}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.blockedCategories">blockedCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#blocked_categories WorkspaceswebBrowserSettings#blocked_categories}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.blockedUrls">blockedUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#blocked_urls WorkspaceswebBrowserSettings#blocked_urls}. |

---

##### `allowedUrls`<sup>Optional</sup> <a name="allowedUrls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.allowedUrls"></a>

```typescript
public readonly allowedUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#allowed_urls WorkspaceswebBrowserSettings#allowed_urls}.

---

##### `blockedCategories`<sup>Optional</sup> <a name="blockedCategories" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.blockedCategories"></a>

```typescript
public readonly blockedCategories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#blocked_categories WorkspaceswebBrowserSettings#blocked_categories}.

---

##### `blockedUrls`<sup>Optional</sup> <a name="blockedUrls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.blockedUrls"></a>

```typescript
public readonly blockedUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#blocked_urls WorkspaceswebBrowserSettings#blocked_urls}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebBrowserSettingsTagsList <a name="WorkspaceswebBrowserSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

new workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.get"></a>

```typescript
public get(index: number): WorkspaceswebBrowserSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebBrowserSettingsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>[]

---


### WorkspaceswebBrowserSettingsTagsOutputReference <a name="WorkspaceswebBrowserSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

new workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebBrowserSettingsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>

---


### WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference <a name="WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer"></a>

```typescript
import { workspaceswebBrowserSettings } from '@cdktn/provider-awscc'

new workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetAllowedUrls">resetAllowedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetBlockedCategories">resetBlockedCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetBlockedUrls">resetBlockedUrls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedUrls` <a name="resetAllowedUrls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetAllowedUrls"></a>

```typescript
public resetAllowedUrls(): void
```

##### `resetBlockedCategories` <a name="resetBlockedCategories" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetBlockedCategories"></a>

```typescript
public resetBlockedCategories(): void
```

##### `resetBlockedUrls` <a name="resetBlockedUrls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetBlockedUrls"></a>

```typescript
public resetBlockedUrls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrlsInput">allowedUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategoriesInput">blockedCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrlsInput">blockedUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrls">allowedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategories">blockedCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrls">blockedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedUrlsInput`<sup>Optional</sup> <a name="allowedUrlsInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrlsInput"></a>

```typescript
public readonly allowedUrlsInput: string[];
```

- *Type:* string[]

---

##### `blockedCategoriesInput`<sup>Optional</sup> <a name="blockedCategoriesInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategoriesInput"></a>

```typescript
public readonly blockedCategoriesInput: string[];
```

- *Type:* string[]

---

##### `blockedUrlsInput`<sup>Optional</sup> <a name="blockedUrlsInput" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrlsInput"></a>

```typescript
public readonly blockedUrlsInput: string[];
```

- *Type:* string[]

---

##### `allowedUrls`<sup>Required</sup> <a name="allowedUrls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrls"></a>

```typescript
public readonly allowedUrls: string[];
```

- *Type:* string[]

---

##### `blockedCategories`<sup>Required</sup> <a name="blockedCategories" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategories"></a>

```typescript
public readonly blockedCategories: string[];
```

- *Type:* string[]

---

##### `blockedUrls`<sup>Required</sup> <a name="blockedUrls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrls"></a>

```typescript
public readonly blockedUrls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebBrowserSettingsWebContentFilteringPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

---




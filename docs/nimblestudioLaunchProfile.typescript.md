# `nimblestudioLaunchProfile` Submodule <a name="`nimblestudioLaunchProfile` Submodule" id="@cdktn/provider-awscc.nimblestudioLaunchProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioLaunchProfile <a name="NimblestudioLaunchProfile" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new nimblestudioLaunchProfile.NimblestudioLaunchProfile(scope: Construct, id: string, config: NimblestudioLaunchProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig">NimblestudioLaunchProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig">NimblestudioLaunchProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration">putStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamConfiguration` <a name="putStreamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration"></a>

```typescript
public putStreamConfiguration(value: NimblestudioLaunchProfileStreamConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NimblestudioLaunchProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NimblestudioLaunchProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioLaunchProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileId">launchProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIdsInput">ec2SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersionsInput">launchProfileProtocolVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfigurationInput">streamConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIdsInput">studioComponentIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioIdInput">studioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIds">ec2SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersions">launchProfileProtocolVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIds">studioComponentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioId">studioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchProfileId`<sup>Required</sup> <a name="launchProfileId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileId"></a>

```typescript
public readonly launchProfileId: string;
```

- *Type:* string

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfiguration"></a>

```typescript
public readonly streamConfiguration: NimblestudioLaunchProfileStreamConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ec2SubnetIdsInput`<sup>Optional</sup> <a name="ec2SubnetIdsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIdsInput"></a>

```typescript
public readonly ec2SubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `launchProfileProtocolVersionsInput`<sup>Optional</sup> <a name="launchProfileProtocolVersionsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersionsInput"></a>

```typescript
public readonly launchProfileProtocolVersionsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamConfigurationInput`<sup>Optional</sup> <a name="streamConfigurationInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfigurationInput"></a>

```typescript
public readonly streamConfigurationInput: IResolvable | NimblestudioLaunchProfileStreamConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

---

##### `studioComponentIdsInput`<sup>Optional</sup> <a name="studioComponentIdsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIdsInput"></a>

```typescript
public readonly studioComponentIdsInput: string[];
```

- *Type:* string[]

---

##### `studioIdInput`<sup>Optional</sup> <a name="studioIdInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioIdInput"></a>

```typescript
public readonly studioIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ec2SubnetIds`<sup>Required</sup> <a name="ec2SubnetIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIds"></a>

```typescript
public readonly ec2SubnetIds: string[];
```

- *Type:* string[]

---

##### `launchProfileProtocolVersions`<sup>Required</sup> <a name="launchProfileProtocolVersions" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersions"></a>

```typescript
public readonly launchProfileProtocolVersions: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `studioComponentIds`<sup>Required</sup> <a name="studioComponentIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIds"></a>

```typescript
public readonly studioComponentIds: string[];
```

- *Type:* string[]

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioLaunchProfileConfig <a name="NimblestudioLaunchProfileConfig" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const nimblestudioLaunchProfileConfig: nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.ec2SubnetIds">ec2SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.launchProfileProtocolVersions">launchProfileProtocolVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioComponentIds">studioComponentIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioId">studioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ec2SubnetIds`<sup>Required</sup> <a name="ec2SubnetIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.ec2SubnetIds"></a>

```typescript
public readonly ec2SubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}.

---

##### `launchProfileProtocolVersions`<sup>Required</sup> <a name="launchProfileProtocolVersions" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.launchProfileProtocolVersions"></a>

```typescript
public readonly launchProfileProtocolVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}.

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.streamConfiguration"></a>

```typescript
public readonly streamConfiguration: NimblestudioLaunchProfileStreamConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}.

---

##### `studioComponentIds`<sup>Required</sup> <a name="studioComponentIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioComponentIds"></a>

```typescript
public readonly studioComponentIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}.

---

### NimblestudioLaunchProfileStreamConfiguration <a name="NimblestudioLaunchProfileStreamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const nimblestudioLaunchProfileStreamConfiguration: nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.clipboardMode">clipboardMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.ec2InstanceTypes">ec2InstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.streamingImageIds">streamingImageIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.automaticTerminationMode">automaticTerminationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#automatic_termination_mode NimblestudioLaunchProfile#automatic_termination_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxSessionLengthInMinutes">maxSessionLengthInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxStoppedSessionLengthInMinutes">maxStoppedSessionLengthInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_stopped_session_length_in_minutes NimblestudioLaunchProfile#max_stopped_session_length_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionBackup">sessionBackup</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_backup NimblestudioLaunchProfile#session_backup}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionPersistenceMode">sessionPersistenceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_persistence_mode NimblestudioLaunchProfile#session_persistence_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_storage NimblestudioLaunchProfile#session_storage}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.volumeConfiguration">volumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#volume_configuration NimblestudioLaunchProfile#volume_configuration}. |

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.clipboardMode"></a>

```typescript
public readonly clipboardMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}.

---

##### `ec2InstanceTypes`<sup>Required</sup> <a name="ec2InstanceTypes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.ec2InstanceTypes"></a>

```typescript
public readonly ec2InstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}.

---

##### `streamingImageIds`<sup>Required</sup> <a name="streamingImageIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.streamingImageIds"></a>

```typescript
public readonly streamingImageIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}.

---

##### `automaticTerminationMode`<sup>Optional</sup> <a name="automaticTerminationMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.automaticTerminationMode"></a>

```typescript
public readonly automaticTerminationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#automatic_termination_mode NimblestudioLaunchProfile#automatic_termination_mode}.

---

##### `maxSessionLengthInMinutes`<sup>Optional</sup> <a name="maxSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxSessionLengthInMinutes"></a>

```typescript
public readonly maxSessionLengthInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}.

---

##### `maxStoppedSessionLengthInMinutes`<sup>Optional</sup> <a name="maxStoppedSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxStoppedSessionLengthInMinutes"></a>

```typescript
public readonly maxStoppedSessionLengthInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_stopped_session_length_in_minutes NimblestudioLaunchProfile#max_stopped_session_length_in_minutes}.

---

##### `sessionBackup`<sup>Optional</sup> <a name="sessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionBackup"></a>

```typescript
public readonly sessionBackup: NimblestudioLaunchProfileStreamConfigurationSessionBackup;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_backup NimblestudioLaunchProfile#session_backup}.

---

##### `sessionPersistenceMode`<sup>Optional</sup> <a name="sessionPersistenceMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionPersistenceMode"></a>

```typescript
public readonly sessionPersistenceMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_persistence_mode NimblestudioLaunchProfile#session_persistence_mode}.

---

##### `sessionStorage`<sup>Optional</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionStorage"></a>

```typescript
public readonly sessionStorage: NimblestudioLaunchProfileStreamConfigurationSessionStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_storage NimblestudioLaunchProfile#session_storage}.

---

##### `volumeConfiguration`<sup>Optional</sup> <a name="volumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.volumeConfiguration"></a>

```typescript
public readonly volumeConfiguration: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#volume_configuration NimblestudioLaunchProfile#volume_configuration}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionBackup <a name="NimblestudioLaunchProfileStreamConfigurationSessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const nimblestudioLaunchProfileStreamConfigurationSessionBackup: nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.maxBackupsToRetain">maxBackupsToRetain</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_backups_to_retain NimblestudioLaunchProfile#max_backups_to_retain}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}. |

---

##### `maxBackupsToRetain`<sup>Optional</sup> <a name="maxBackupsToRetain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.maxBackupsToRetain"></a>

```typescript
public readonly maxBackupsToRetain: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_backups_to_retain NimblestudioLaunchProfile#max_backups_to_retain}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionStorage <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const nimblestudioLaunchProfileStreamConfigurationSessionStorage: nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.mode">mode</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.root">root</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#root NimblestudioLaunchProfile#root}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.mode"></a>

```typescript
public readonly mode: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}.

---

##### `root`<sup>Optional</sup> <a name="root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.root"></a>

```typescript
public readonly root: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#root NimblestudioLaunchProfile#root}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const nimblestudioLaunchProfileStreamConfigurationSessionStorageRoot: nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.linux">linux</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#linux NimblestudioLaunchProfile#linux}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.windows">windows</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#windows NimblestudioLaunchProfile#windows}. |

---

##### `linux`<sup>Optional</sup> <a name="linux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.linux"></a>

```typescript
public readonly linux: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#linux NimblestudioLaunchProfile#linux}.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.windows"></a>

```typescript
public readonly windows: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#windows NimblestudioLaunchProfile#windows}.

---

### NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration <a name="NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const nimblestudioLaunchProfileStreamConfigurationVolumeConfiguration: nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#iops NimblestudioLaunchProfile#iops}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#size NimblestudioLaunchProfile#size}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#throughput NimblestudioLaunchProfile#throughput}. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#iops NimblestudioLaunchProfile#iops}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#size NimblestudioLaunchProfile#size}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#throughput NimblestudioLaunchProfile#throughput}.

---

## Classes <a name="Classes" id="Classes"></a>

### NimblestudioLaunchProfileStreamConfigurationOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup">putSessionBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage">putSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration">putVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetAutomaticTerminationMode">resetAutomaticTerminationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxSessionLengthInMinutes">resetMaxSessionLengthInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxStoppedSessionLengthInMinutes">resetMaxStoppedSessionLengthInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionBackup">resetSessionBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionPersistenceMode">resetSessionPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionStorage">resetSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetVolumeConfiguration">resetVolumeConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionBackup` <a name="putSessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup"></a>

```typescript
public putSessionBackup(value: NimblestudioLaunchProfileStreamConfigurationSessionBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---

##### `putSessionStorage` <a name="putSessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage"></a>

```typescript
public putSessionStorage(value: NimblestudioLaunchProfileStreamConfigurationSessionStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---

##### `putVolumeConfiguration` <a name="putVolumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration"></a>

```typescript
public putVolumeConfiguration(value: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---

##### `resetAutomaticTerminationMode` <a name="resetAutomaticTerminationMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetAutomaticTerminationMode"></a>

```typescript
public resetAutomaticTerminationMode(): void
```

##### `resetMaxSessionLengthInMinutes` <a name="resetMaxSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxSessionLengthInMinutes"></a>

```typescript
public resetMaxSessionLengthInMinutes(): void
```

##### `resetMaxStoppedSessionLengthInMinutes` <a name="resetMaxStoppedSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxStoppedSessionLengthInMinutes"></a>

```typescript
public resetMaxStoppedSessionLengthInMinutes(): void
```

##### `resetSessionBackup` <a name="resetSessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionBackup"></a>

```typescript
public resetSessionBackup(): void
```

##### `resetSessionPersistenceMode` <a name="resetSessionPersistenceMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionPersistenceMode"></a>

```typescript
public resetSessionPersistenceMode(): void
```

##### `resetSessionStorage` <a name="resetSessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionStorage"></a>

```typescript
public resetSessionStorage(): void
```

##### `resetVolumeConfiguration` <a name="resetVolumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetVolumeConfiguration"></a>

```typescript
public resetVolumeConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup">sessionBackup</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration">volumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationModeInput">automaticTerminationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardModeInput">clipboardModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypesInput">ec2InstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutesInput">maxSessionLengthInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutesInput">maxStoppedSessionLengthInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackupInput">sessionBackupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceModeInput">sessionPersistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorageInput">sessionStorageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIdsInput">streamingImageIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfigurationInput">volumeConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode">automaticTerminationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode">clipboardMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes">ec2InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes">maxSessionLengthInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes">maxStoppedSessionLengthInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode">sessionPersistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds">streamingImageIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionBackup`<sup>Required</sup> <a name="sessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup"></a>

```typescript
public readonly sessionBackup: NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a>

---

##### `sessionStorage`<sup>Required</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage"></a>

```typescript
public readonly sessionStorage: NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a>

---

##### `volumeConfiguration`<sup>Required</sup> <a name="volumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration"></a>

```typescript
public readonly volumeConfiguration: NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a>

---

##### `automaticTerminationModeInput`<sup>Optional</sup> <a name="automaticTerminationModeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationModeInput"></a>

```typescript
public readonly automaticTerminationModeInput: string;
```

- *Type:* string

---

##### `clipboardModeInput`<sup>Optional</sup> <a name="clipboardModeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardModeInput"></a>

```typescript
public readonly clipboardModeInput: string;
```

- *Type:* string

---

##### `ec2InstanceTypesInput`<sup>Optional</sup> <a name="ec2InstanceTypesInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypesInput"></a>

```typescript
public readonly ec2InstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `maxSessionLengthInMinutesInput`<sup>Optional</sup> <a name="maxSessionLengthInMinutesInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutesInput"></a>

```typescript
public readonly maxSessionLengthInMinutesInput: number;
```

- *Type:* number

---

##### `maxStoppedSessionLengthInMinutesInput`<sup>Optional</sup> <a name="maxStoppedSessionLengthInMinutesInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutesInput"></a>

```typescript
public readonly maxStoppedSessionLengthInMinutesInput: number;
```

- *Type:* number

---

##### `sessionBackupInput`<sup>Optional</sup> <a name="sessionBackupInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackupInput"></a>

```typescript
public readonly sessionBackupInput: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionBackup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---

##### `sessionPersistenceModeInput`<sup>Optional</sup> <a name="sessionPersistenceModeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceModeInput"></a>

```typescript
public readonly sessionPersistenceModeInput: string;
```

- *Type:* string

---

##### `sessionStorageInput`<sup>Optional</sup> <a name="sessionStorageInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorageInput"></a>

```typescript
public readonly sessionStorageInput: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---

##### `streamingImageIdsInput`<sup>Optional</sup> <a name="streamingImageIdsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIdsInput"></a>

```typescript
public readonly streamingImageIdsInput: string[];
```

- *Type:* string[]

---

##### `volumeConfigurationInput`<sup>Optional</sup> <a name="volumeConfigurationInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfigurationInput"></a>

```typescript
public readonly volumeConfigurationInput: IResolvable | NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---

##### `automaticTerminationMode`<sup>Required</sup> <a name="automaticTerminationMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode"></a>

```typescript
public readonly automaticTerminationMode: string;
```

- *Type:* string

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode"></a>

```typescript
public readonly clipboardMode: string;
```

- *Type:* string

---

##### `ec2InstanceTypes`<sup>Required</sup> <a name="ec2InstanceTypes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes"></a>

```typescript
public readonly ec2InstanceTypes: string[];
```

- *Type:* string[]

---

##### `maxSessionLengthInMinutes`<sup>Required</sup> <a name="maxSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes"></a>

```typescript
public readonly maxSessionLengthInMinutes: number;
```

- *Type:* number

---

##### `maxStoppedSessionLengthInMinutes`<sup>Required</sup> <a name="maxStoppedSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes"></a>

```typescript
public readonly maxStoppedSessionLengthInMinutes: number;
```

- *Type:* number

---

##### `sessionPersistenceMode`<sup>Required</sup> <a name="sessionPersistenceMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode"></a>

```typescript
public readonly sessionPersistenceMode: string;
```

- *Type:* string

---

##### `streamingImageIds`<sup>Required</sup> <a name="streamingImageIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds"></a>

```typescript
public readonly streamingImageIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioLaunchProfileStreamConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMaxBackupsToRetain">resetMaxBackupsToRetain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackupsToRetain` <a name="resetMaxBackupsToRetain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMaxBackupsToRetain"></a>

```typescript
public resetMaxBackupsToRetain(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetainInput">maxBackupsToRetainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain">maxBackupsToRetain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBackupsToRetainInput`<sup>Optional</sup> <a name="maxBackupsToRetainInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetainInput"></a>

```typescript
public readonly maxBackupsToRetainInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `maxBackupsToRetain`<sup>Required</sup> <a name="maxBackupsToRetain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain"></a>

```typescript
public readonly maxBackupsToRetain: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionBackup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot">putRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetRoot">resetRoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoot` <a name="putRoot" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot"></a>

```typescript
public putRoot(value: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetRoot` <a name="resetRoot" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetRoot"></a>

```typescript
public resetRoot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root">root</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.modeInput">modeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.rootInput">rootInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode">mode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `root`<sup>Required</sup> <a name="root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root"></a>

```typescript
public readonly root: NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string[];
```

- *Type:* string[]

---

##### `rootInput`<sup>Optional</sup> <a name="rootInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.rootInput"></a>

```typescript
public readonly rootInput: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode"></a>

```typescript
public readonly mode: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetLinux">resetLinux</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetWindows">resetWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLinux` <a name="resetLinux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetLinux"></a>

```typescript
public resetLinux(): void
```

##### `resetWindows` <a name="resetWindows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetWindows"></a>

```typescript
public resetWindows(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linuxInput">linuxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windowsInput">windowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux">linux</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows">windows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linuxInput`<sup>Optional</sup> <a name="linuxInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linuxInput"></a>

```typescript
public readonly linuxInput: string;
```

- *Type:* string

---

##### `windowsInput`<sup>Optional</sup> <a name="windowsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windowsInput"></a>

```typescript
public readonly windowsInput: string;
```

- *Type:* string

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux"></a>

```typescript
public readonly linux: string;
```

- *Type:* string

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows"></a>

```typescript
public readonly windows: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---


### NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { nimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetSize` <a name="resetSize" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---




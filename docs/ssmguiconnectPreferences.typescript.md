# `ssmguiconnectPreferences` Submodule <a name="`ssmguiconnectPreferences` Submodule" id="@cdktn/provider-awscc.ssmguiconnectPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmguiconnectPreferences <a name="SsmguiconnectPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences awscc_ssmguiconnect_preferences}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

new ssmguiconnectPreferences.SsmguiconnectPreferences(scope: Construct, id: string, config?: SsmguiconnectPreferencesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig">SsmguiconnectPreferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig">SsmguiconnectPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences">putConnectionRecordingPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetConnectionRecordingPreferences">resetConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionRecordingPreferences` <a name="putConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences"></a>

```typescript
public putConnectionRecordingPreferences(value: SsmguiconnectPreferencesConnectionRecordingPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---

##### `resetConnectionRecordingPreferences` <a name="resetConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetConnectionRecordingPreferences"></a>

```typescript
public resetConnectionRecordingPreferences(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmguiconnectPreferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmguiconnectPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmguiconnectPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferences">connectionRecordingPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferencesInput">connectionRecordingPreferencesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `connectionRecordingPreferences`<sup>Required</sup> <a name="connectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferences"></a>

```typescript
public readonly connectionRecordingPreferences: SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `connectionRecordingPreferencesInput`<sup>Optional</sup> <a name="connectionRecordingPreferencesInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferencesInput"></a>

```typescript
public readonly connectionRecordingPreferencesInput: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmguiconnectPreferencesConfig <a name="SsmguiconnectPreferencesConfig" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

const ssmguiconnectPreferencesConfig: ssmguiconnectPreferences.SsmguiconnectPreferencesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connectionRecordingPreferences">connectionRecordingPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionRecordingPreferences`<sup>Optional</sup> <a name="connectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connectionRecordingPreferences"></a>

```typescript
public readonly connectionRecordingPreferences: SsmguiconnectPreferencesConnectionRecordingPreferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region.

This includes details such as which S3 bucket recordings are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#connection_recording_preferences SsmguiconnectPreferences#connection_recording_preferences}

---

### SsmguiconnectPreferencesConnectionRecordingPreferences <a name="SsmguiconnectPreferencesConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

const ssmguiconnectPreferencesConnectionRecordingPreferences: ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.recordingDestinations">recordingDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | Determines where recordings of RDP connections are stored. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service.

This key must exist in the same AWS Region as the node you start an RDP connection to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#kms_key_arn SsmguiconnectPreferences#kms_key_arn}

---

##### `recordingDestinations`<sup>Optional</sup> <a name="recordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.recordingDestinations"></a>

```typescript
public readonly recordingDestinations: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

Determines where recordings of RDP connections are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#recording_destinations SsmguiconnectPreferences#recording_destinations}

---

### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

const ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations: ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.property.s3Buckets">s3Buckets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]</code> | The S3 bucket where RDP connection recordings are stored. |

---

##### `s3Buckets`<sup>Optional</sup> <a name="s3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.property.s3Buckets"></a>

```typescript
public readonly s3Buckets: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]

The S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#s3_buckets SsmguiconnectPreferences#s3_buckets}

---

### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

const ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets: ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the S3 bucket where RDP connection recordings are stored. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | The AWS account number that owns the S3 bucket. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#bucket_name SsmguiconnectPreferences#bucket_name}

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

The AWS account number that owns the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#bucket_owner SsmguiconnectPreferences#bucket_owner}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

new ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations">putRecordingDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetRecordingDestinations">resetRecordingDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecordingDestinations` <a name="putRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations"></a>

```typescript
public putRecordingDestinations(value: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetRecordingDestinations` <a name="resetRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetRecordingDestinations"></a>

```typescript
public resetRecordingDestinations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations">recordingDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinationsInput">recordingDestinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordingDestinations`<sup>Required</sup> <a name="recordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations"></a>

```typescript
public readonly recordingDestinations: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `recordingDestinationsInput`<sup>Optional</sup> <a name="recordingDestinationsInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinationsInput"></a>

```typescript
public readonly recordingDestinationsInput: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

new ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets">putS3Buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resetS3Buckets">resetS3Buckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Buckets` <a name="putS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets"></a>

```typescript
public putS3Buckets(value: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]

---

##### `resetS3Buckets` <a name="resetS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resetS3Buckets"></a>

```typescript
public resetS3Buckets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets">s3Buckets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3BucketsInput">s3BucketsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Buckets`<sup>Required</sup> <a name="s3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets"></a>

```typescript
public readonly s3Buckets: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a>

---

##### `s3BucketsInput`<sup>Optional</sup> <a name="s3BucketsInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3BucketsInput"></a>

```typescript
public readonly s3BucketsInput: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

new ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get"></a>

```typescript
public get(index: number): SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer"></a>

```typescript
import { ssmguiconnectPreferences } from '@cdktn/provider-awscc'

new ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>

---




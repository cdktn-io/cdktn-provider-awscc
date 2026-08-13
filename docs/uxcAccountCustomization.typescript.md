# `uxcAccountCustomization` Submodule <a name="`uxcAccountCustomization` Submodule" id="@cdktn/provider-awscc.uxcAccountCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UxcAccountCustomization <a name="UxcAccountCustomization" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/uxc_account_customization awscc_uxc_account_customization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer"></a>

```typescript
import { uxcAccountCustomization } from '@cdktn/provider-awscc'

new uxcAccountCustomization.UxcAccountCustomization(scope: Construct, id: string, config?: UxcAccountCustomizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig">UxcAccountCustomizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig">UxcAccountCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetAccountColor">resetAccountColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleRegions">resetVisibleRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleServices">resetVisibleServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountColor` <a name="resetAccountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetAccountColor"></a>

```typescript
public resetAccountColor(): void
```

##### `resetVisibleRegions` <a name="resetVisibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleRegions"></a>

```typescript
public resetVisibleRegions(): void
```

##### `resetVisibleServices` <a name="resetVisibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleServices"></a>

```typescript
public resetVisibleServices(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a UxcAccountCustomization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct"></a>

```typescript
import { uxcAccountCustomization } from '@cdktn/provider-awscc'

uxcAccountCustomization.UxcAccountCustomization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement"></a>

```typescript
import { uxcAccountCustomization } from '@cdktn/provider-awscc'

uxcAccountCustomization.UxcAccountCustomization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource"></a>

```typescript
import { uxcAccountCustomization } from '@cdktn/provider-awscc'

uxcAccountCustomization.UxcAccountCustomization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport"></a>

```typescript
import { uxcAccountCustomization } from '@cdktn/provider-awscc'

uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a UxcAccountCustomization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UxcAccountCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UxcAccountCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/uxc_account_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the UxcAccountCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColorInput">accountColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegionsInput">visibleRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServicesInput">visibleServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColor">accountColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegions">visibleRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServices">visibleServices</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountColorInput`<sup>Optional</sup> <a name="accountColorInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColorInput"></a>

```typescript
public readonly accountColorInput: string;
```

- *Type:* string

---

##### `visibleRegionsInput`<sup>Optional</sup> <a name="visibleRegionsInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegionsInput"></a>

```typescript
public readonly visibleRegionsInput: string[];
```

- *Type:* string[]

---

##### `visibleServicesInput`<sup>Optional</sup> <a name="visibleServicesInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServicesInput"></a>

```typescript
public readonly visibleServicesInput: string[];
```

- *Type:* string[]

---

##### `accountColor`<sup>Required</sup> <a name="accountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColor"></a>

```typescript
public readonly accountColor: string;
```

- *Type:* string

---

##### `visibleRegions`<sup>Required</sup> <a name="visibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegions"></a>

```typescript
public readonly visibleRegions: string[];
```

- *Type:* string[]

---

##### `visibleServices`<sup>Required</sup> <a name="visibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServices"></a>

```typescript
public readonly visibleServices: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UxcAccountCustomizationConfig <a name="UxcAccountCustomizationConfig" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.Initializer"></a>

```typescript
import { uxcAccountCustomization } from '@cdktn/provider-awscc'

const uxcAccountCustomizationConfig: uxcAccountCustomization.UxcAccountCustomizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.accountColor">accountColor</a></code> | <code>string</code> | The color theme assigned to the account for visual identification in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleRegions">visibleRegions</a></code> | <code>string[]</code> | A list of AWS region identifiers visible to the account in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleServices">visibleServices</a></code> | <code>string[]</code> | A list of AWS service identifiers visible to the account in the AWS Console. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountColor`<sup>Optional</sup> <a name="accountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.accountColor"></a>

```typescript
public readonly accountColor: string;
```

- *Type:* string

The color theme assigned to the account for visual identification in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/uxc_account_customization#account_color UxcAccountCustomization#account_color}

---

##### `visibleRegions`<sup>Optional</sup> <a name="visibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleRegions"></a>

```typescript
public readonly visibleRegions: string[];
```

- *Type:* string[]

A list of AWS region identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/uxc_account_customization#visible_regions UxcAccountCustomization#visible_regions}

---

##### `visibleServices`<sup>Optional</sup> <a name="visibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleServices"></a>

```typescript
public readonly visibleServices: string[];
```

- *Type:* string[]

A list of AWS service identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/uxc_account_customization#visible_services UxcAccountCustomization#visible_services}

---




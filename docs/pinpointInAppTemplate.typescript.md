# `pinpointInAppTemplate` Submodule <a name="`pinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.pinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointInAppTemplate <a name="PinpointInAppTemplate" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplate(scope: Construct, id: string, config: PinpointInAppTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig">PinpointInAppTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig">PinpointInAppTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig">resetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout">resetLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription">resetTemplateDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent"></a>

```typescript
public putContent(value: IResolvable | PinpointInAppTemplateContent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetCustomConfig` <a name="resetCustomConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig"></a>

```typescript
public resetCustomConfig(): void
```

##### `resetLayout` <a name="resetLayout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout"></a>

```typescript
public resetLayout(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateDescription` <a name="resetTemplateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription"></a>

```typescript
public resetTemplateDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

pinpointInAppTemplate.PinpointInAppTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PinpointInAppTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput">customConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput">layoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput">templateDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig">customConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout">layout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags">tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription">templateDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content"></a>

```typescript
public readonly content: PinpointInAppTemplateContentList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | PinpointInAppTemplateContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput"></a>

```typescript
public readonly customConfigInput: string;
```

- *Type:* string

---

##### `layoutInput`<sup>Optional</sup> <a name="layoutInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput"></a>

```typescript
public readonly layoutInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `templateDescriptionInput`<sup>Optional</sup> <a name="templateDescriptionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput"></a>

```typescript
public readonly templateDescriptionInput: string;
```

- *Type:* string

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig"></a>

```typescript
public readonly customConfig: string;
```

- *Type:* string

---

##### `layout`<sup>Required</sup> <a name="layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout"></a>

```typescript
public readonly layout: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

##### `templateDescription`<sup>Required</sup> <a name="templateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription"></a>

```typescript
public readonly templateDescription: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointInAppTemplateConfig <a name="PinpointInAppTemplateConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateConfig: pinpointInAppTemplate.PinpointInAppTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName">templateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content">content</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig">customConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout">layout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags">tags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription">templateDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content"></a>

```typescript
public readonly content: IResolvable | PinpointInAppTemplateContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}.

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig"></a>

```typescript
public readonly customConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}.

---

##### `layout`<sup>Optional</sup> <a name="layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout"></a>

```typescript
public readonly layout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}.

---

##### `templateDescription`<sup>Optional</sup> <a name="templateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription"></a>

```typescript
public readonly templateDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}.

---

### PinpointInAppTemplateContent <a name="PinpointInAppTemplateContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContent: pinpointInAppTemplate.PinpointInAppTemplateContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig">bodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig">headerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl">imageUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn">primaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn">secondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `bodyConfig`<sup>Optional</sup> <a name="bodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig"></a>

```typescript
public readonly bodyConfig: PinpointInAppTemplateContentBodyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}.

---

##### `headerConfig`<sup>Optional</sup> <a name="headerConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig"></a>

```typescript
public readonly headerConfig: PinpointInAppTemplateContentHeaderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}.

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}.

---

##### `primaryBtn`<sup>Optional</sup> <a name="primaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn"></a>

```typescript
public readonly primaryBtn: PinpointInAppTemplateContentPrimaryBtn;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}.

---

##### `secondaryBtn`<sup>Optional</sup> <a name="secondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn"></a>

```typescript
public readonly secondaryBtn: PinpointInAppTemplateContentSecondaryBtn;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}.

---

### PinpointInAppTemplateContentBodyConfig <a name="PinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentBodyConfig: pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment">alignment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body">body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor">textColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `alignment`<sup>Optional</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment"></a>

```typescript
public readonly alignment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}.

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentHeaderConfig <a name="PinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentHeaderConfig: pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment">alignment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header">header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor">textColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `alignment`<sup>Optional</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment"></a>

```typescript
public readonly alignment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}.

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtn <a name="PinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentPrimaryBtn: pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `android`<sup>Optional</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android"></a>

```typescript
public readonly android: PinpointInAppTemplateContentPrimaryBtnAndroid;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `defaultConfig`<sup>Optional</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig"></a>

```typescript
public readonly defaultConfig: PinpointInAppTemplateContentPrimaryBtnDefaultConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `ios`<sup>Optional</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios"></a>

```typescript
public readonly ios: PinpointInAppTemplateContentPrimaryBtnIos;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web"></a>

```typescript
public readonly web: PinpointInAppTemplateContentPrimaryBtnWeb;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentPrimaryBtnAndroid <a name="PinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentPrimaryBtnAndroid: pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction">buttonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentPrimaryBtnDefaultConfig: pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius">borderRadius</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction">buttonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor">textColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `borderRadius`<sup>Optional</sup> <a name="borderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius"></a>

```typescript
public readonly borderRadius: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtnIos <a name="PinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentPrimaryBtnIos: pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction">buttonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnWeb <a name="PinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentPrimaryBtnWeb: pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction">buttonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtn <a name="PinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentSecondaryBtn: pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `android`<sup>Optional</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android"></a>

```typescript
public readonly android: PinpointInAppTemplateContentSecondaryBtnAndroid;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `defaultConfig`<sup>Optional</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig"></a>

```typescript
public readonly defaultConfig: PinpointInAppTemplateContentSecondaryBtnDefaultConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `ios`<sup>Optional</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios"></a>

```typescript
public readonly ios: PinpointInAppTemplateContentSecondaryBtnIos;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web"></a>

```typescript
public readonly web: PinpointInAppTemplateContentSecondaryBtnWeb;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentSecondaryBtnAndroid <a name="PinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentSecondaryBtnAndroid: pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction">buttonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentSecondaryBtnDefaultConfig: pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius">borderRadius</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction">buttonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor">textColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `borderRadius`<sup>Optional</sup> <a name="borderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius"></a>

```typescript
public readonly borderRadius: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentSecondaryBtnIos <a name="PinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentSecondaryBtnIos: pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction">buttonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnWeb <a name="PinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

const pinpointInAppTemplateContentSecondaryBtnWeb: pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction">buttonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `buttonAction`<sup>Optional</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointInAppTemplateContentBodyConfigOutputReference <a name="PinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment">resetAlignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignment` <a name="resetAlignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment"></a>

```typescript
public resetAlignment(): void
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor"></a>

```typescript
public resetTextColor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput">alignmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput">textColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">alignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alignmentInput`<sup>Optional</sup> <a name="alignmentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput"></a>

```typescript
public readonly alignmentInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput"></a>

```typescript
public readonly textColorInput: string;
```

- *Type:* string

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```typescript
public readonly alignment: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentBodyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---


### PinpointInAppTemplateContentHeaderConfigOutputReference <a name="PinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment">resetAlignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignment` <a name="resetAlignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment"></a>

```typescript
public resetAlignment(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor"></a>

```typescript
public resetTextColor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput">alignmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput">textColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">alignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alignmentInput`<sup>Optional</sup> <a name="alignmentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput"></a>

```typescript
public readonly alignmentInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput"></a>

```typescript
public readonly textColorInput: string;
```

- *Type:* string

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```typescript
public readonly alignment: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentHeaderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---


### PinpointInAppTemplateContentList <a name="PinpointInAppTemplateContentList" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get"></a>

```typescript
public get(index: number): PinpointInAppTemplateContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]

---


### PinpointInAppTemplateContentOutputReference <a name="PinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig">putBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig">putHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn">putPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn">putSecondaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig">resetBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig">resetHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn">resetPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn">resetSecondaryBtn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBodyConfig` <a name="putBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig"></a>

```typescript
public putBodyConfig(value: PinpointInAppTemplateContentBodyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---

##### `putHeaderConfig` <a name="putHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig"></a>

```typescript
public putHeaderConfig(value: PinpointInAppTemplateContentHeaderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---

##### `putPrimaryBtn` <a name="putPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn"></a>

```typescript
public putPrimaryBtn(value: PinpointInAppTemplateContentPrimaryBtn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---

##### `putSecondaryBtn` <a name="putSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn"></a>

```typescript
public putSecondaryBtn(value: PinpointInAppTemplateContentSecondaryBtn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor"></a>

```typescript
public resetBackgroundColor(): void
```

##### `resetBodyConfig` <a name="resetBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig"></a>

```typescript
public resetBodyConfig(): void
```

##### `resetHeaderConfig` <a name="resetHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig"></a>

```typescript
public resetHeaderConfig(): void
```

##### `resetImageUrl` <a name="resetImageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl"></a>

```typescript
public resetImageUrl(): void
```

##### `resetPrimaryBtn` <a name="resetPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn"></a>

```typescript
public resetPrimaryBtn(): void
```

##### `resetSecondaryBtn` <a name="resetSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn"></a>

```typescript
public resetSecondaryBtn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig">bodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig">headerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn">primaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn">secondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput">bodyConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput">headerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput">primaryBtnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput">secondaryBtnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodyConfig`<sup>Required</sup> <a name="bodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```typescript
public readonly bodyConfig: PinpointInAppTemplateContentBodyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `headerConfig`<sup>Required</sup> <a name="headerConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```typescript
public readonly headerConfig: PinpointInAppTemplateContentHeaderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `primaryBtn`<sup>Required</sup> <a name="primaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```typescript
public readonly primaryBtn: PinpointInAppTemplateContentPrimaryBtnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `secondaryBtn`<sup>Required</sup> <a name="secondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```typescript
public readonly secondaryBtn: PinpointInAppTemplateContentSecondaryBtnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput"></a>

```typescript
public readonly backgroundColorInput: string;
```

- *Type:* string

---

##### `bodyConfigInput`<sup>Optional</sup> <a name="bodyConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput"></a>

```typescript
public readonly bodyConfigInput: IResolvable | PinpointInAppTemplateContentBodyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---

##### `headerConfigInput`<sup>Optional</sup> <a name="headerConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput"></a>

```typescript
public readonly headerConfigInput: IResolvable | PinpointInAppTemplateContentHeaderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput"></a>

```typescript
public readonly imageUrlInput: string;
```

- *Type:* string

---

##### `primaryBtnInput`<sup>Optional</sup> <a name="primaryBtnInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput"></a>

```typescript
public readonly primaryBtnInput: IResolvable | PinpointInAppTemplateContentPrimaryBtn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---

##### `secondaryBtnInput`<sup>Optional</sup> <a name="secondaryBtnInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput"></a>

```typescript
public readonly secondaryBtnInput: IResolvable | PinpointInAppTemplateContentSecondaryBtn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>

---


### PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction"></a>

```typescript
public resetButtonAction(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```typescript
public readonly buttonActionInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentPrimaryBtnAndroid;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---


### PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius">resetBorderRadius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```typescript
public resetBackgroundColor(): void
```

##### `resetBorderRadius` <a name="resetBorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```typescript
public resetBorderRadius(): void
```

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```typescript
public resetButtonAction(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```typescript
public resetTextColor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput">borderRadiusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput">textColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">borderRadius</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```typescript
public readonly backgroundColorInput: string;
```

- *Type:* string

---

##### `borderRadiusInput`<sup>Optional</sup> <a name="borderRadiusInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```typescript
public readonly borderRadiusInput: number;
```

- *Type:* number

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```typescript
public readonly buttonActionInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```typescript
public readonly textColorInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `borderRadius`<sup>Required</sup> <a name="borderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```typescript
public readonly borderRadius: number;
```

- *Type:* number

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentPrimaryBtnDefaultConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---


### PinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction"></a>

```typescript
public resetButtonAction(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput"></a>

```typescript
public readonly buttonActionInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentPrimaryBtnIos;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---


### PinpointInAppTemplateContentPrimaryBtnOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid">putAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig">putDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos">putIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb">putWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid">resetAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig">resetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos">resetIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb">resetWeb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndroid` <a name="putAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid"></a>

```typescript
public putAndroid(value: PinpointInAppTemplateContentPrimaryBtnAndroid): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---

##### `putDefaultConfig` <a name="putDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig"></a>

```typescript
public putDefaultConfig(value: PinpointInAppTemplateContentPrimaryBtnDefaultConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---

##### `putIos` <a name="putIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos"></a>

```typescript
public putIos(value: PinpointInAppTemplateContentPrimaryBtnIos): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---

##### `putWeb` <a name="putWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb"></a>

```typescript
public putWeb(value: PinpointInAppTemplateContentPrimaryBtnWeb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---

##### `resetAndroid` <a name="resetAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid"></a>

```typescript
public resetAndroid(): void
```

##### `resetDefaultConfig` <a name="resetDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig"></a>

```typescript
public resetDefaultConfig(): void
```

##### `resetIos` <a name="resetIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos"></a>

```typescript
public resetIos(): void
```

##### `resetWeb` <a name="resetWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb"></a>

```typescript
public resetWeb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput">androidInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput">defaultConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput">iosInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput">webInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```typescript
public readonly android: PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `defaultConfig`<sup>Required</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```typescript
public readonly defaultConfig: PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```typescript
public readonly ios: PinpointInAppTemplateContentPrimaryBtnIosOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```typescript
public readonly web: PinpointInAppTemplateContentPrimaryBtnWebOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `androidInput`<sup>Optional</sup> <a name="androidInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput"></a>

```typescript
public readonly androidInput: IResolvable | PinpointInAppTemplateContentPrimaryBtnAndroid;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---

##### `defaultConfigInput`<sup>Optional</sup> <a name="defaultConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput"></a>

```typescript
public readonly defaultConfigInput: IResolvable | PinpointInAppTemplateContentPrimaryBtnDefaultConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---

##### `iosInput`<sup>Optional</sup> <a name="iosInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput"></a>

```typescript
public readonly iosInput: IResolvable | PinpointInAppTemplateContentPrimaryBtnIos;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---

##### `webInput`<sup>Optional</sup> <a name="webInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput"></a>

```typescript
public readonly webInput: IResolvable | PinpointInAppTemplateContentPrimaryBtnWeb;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentPrimaryBtn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---


### PinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction"></a>

```typescript
public resetButtonAction(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput"></a>

```typescript
public readonly buttonActionInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentPrimaryBtnWeb;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---


### PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction"></a>

```typescript
public resetButtonAction(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```typescript
public readonly buttonActionInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentSecondaryBtnAndroid;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---


### PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius">resetBorderRadius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```typescript
public resetBackgroundColor(): void
```

##### `resetBorderRadius` <a name="resetBorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```typescript
public resetBorderRadius(): void
```

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```typescript
public resetButtonAction(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```typescript
public resetTextColor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput">borderRadiusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput">textColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">borderRadius</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```typescript
public readonly backgroundColorInput: string;
```

- *Type:* string

---

##### `borderRadiusInput`<sup>Optional</sup> <a name="borderRadiusInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```typescript
public readonly borderRadiusInput: number;
```

- *Type:* number

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```typescript
public readonly buttonActionInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```typescript
public readonly textColorInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `borderRadius`<sup>Required</sup> <a name="borderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```typescript
public readonly borderRadius: number;
```

- *Type:* number

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentSecondaryBtnDefaultConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---


### PinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction"></a>

```typescript
public resetButtonAction(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput"></a>

```typescript
public readonly buttonActionInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentSecondaryBtnIos;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---


### PinpointInAppTemplateContentSecondaryBtnOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid">putAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig">putDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos">putIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb">putWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid">resetAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig">resetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos">resetIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb">resetWeb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndroid` <a name="putAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid"></a>

```typescript
public putAndroid(value: PinpointInAppTemplateContentSecondaryBtnAndroid): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---

##### `putDefaultConfig` <a name="putDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig"></a>

```typescript
public putDefaultConfig(value: PinpointInAppTemplateContentSecondaryBtnDefaultConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---

##### `putIos` <a name="putIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos"></a>

```typescript
public putIos(value: PinpointInAppTemplateContentSecondaryBtnIos): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---

##### `putWeb` <a name="putWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb"></a>

```typescript
public putWeb(value: PinpointInAppTemplateContentSecondaryBtnWeb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---

##### `resetAndroid` <a name="resetAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid"></a>

```typescript
public resetAndroid(): void
```

##### `resetDefaultConfig` <a name="resetDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig"></a>

```typescript
public resetDefaultConfig(): void
```

##### `resetIos` <a name="resetIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos"></a>

```typescript
public resetIos(): void
```

##### `resetWeb` <a name="resetWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb"></a>

```typescript
public resetWeb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput">androidInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput">defaultConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput">iosInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput">webInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```typescript
public readonly android: PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `defaultConfig`<sup>Required</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```typescript
public readonly defaultConfig: PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```typescript
public readonly ios: PinpointInAppTemplateContentSecondaryBtnIosOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```typescript
public readonly web: PinpointInAppTemplateContentSecondaryBtnWebOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `androidInput`<sup>Optional</sup> <a name="androidInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput"></a>

```typescript
public readonly androidInput: IResolvable | PinpointInAppTemplateContentSecondaryBtnAndroid;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---

##### `defaultConfigInput`<sup>Optional</sup> <a name="defaultConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput"></a>

```typescript
public readonly defaultConfigInput: IResolvable | PinpointInAppTemplateContentSecondaryBtnDefaultConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---

##### `iosInput`<sup>Optional</sup> <a name="iosInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput"></a>

```typescript
public readonly iosInput: IResolvable | PinpointInAppTemplateContentSecondaryBtnIos;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---

##### `webInput`<sup>Optional</sup> <a name="webInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput"></a>

```typescript
public readonly webInput: IResolvable | PinpointInAppTemplateContentSecondaryBtnWeb;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentSecondaryBtn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---


### PinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```typescript
import { pinpointInAppTemplate } from '@cdktn/provider-awscc'

new pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction">resetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink">resetLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonAction` <a name="resetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction"></a>

```typescript
public resetButtonAction(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput">buttonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonActionInput`<sup>Optional</sup> <a name="buttonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput"></a>

```typescript
public readonly buttonActionInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointInAppTemplateContentSecondaryBtnWeb;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---



